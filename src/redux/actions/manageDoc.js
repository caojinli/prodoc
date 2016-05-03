import fetch from 'isomorphic-fetch' 
export const ADD_DOC = 'ADD_DOC'// 新增
export const DEL_DOC = 'DEL_DOC'
export const REQUEST_POSTS = 'REQUEST_POSTS'// 查询
export const UPDATE_DOC = 'UPDATE_DOC'
export const SELECT_DOC = 'SELECT_DOC'
export const INVALIDATE_DOC = 'INVALIDATE_DOC'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'// 收到响应时， 接受

export function addDoc (doc) {
		return {
					type: ADD_DOC,
					doc
		}
}
export function selectDoc (doc) {
	return {
				type: SELECT_DOC,
				doc
	}
}
export function delDoc (id) {
	return {
		type: DEL_DOC,
		id
	}
}
export function invalidateDoc (doc) {
  return {
			type: INVALIDATE_DOC,
			doc
  }
}
export function requestPosts (doc) {
	return {
	type: REQUEST_POSTS,
	doc
	}
}

export function updateDoc (id, newDoc) {
	return {
	type: UPDATE_DOC,
	newDoc
	}
}

export function receivePosts (doc, json) {
  return {
    type: RECEIVE_POSTS,
    doc,
    posts: json.data.children.map((child) => (child.data)),
    receivedAt: Date.now()
  }
}

export function fetchPosts (doc) {
	return function (dispatch) {
		dispatch(requestPosts(doc))
		return fetch(`http://www.subreddit.com/r/${doc}.json`)
		.then(response => response.json())
		.then(json =>
				dispatch(receivePosts(doc, json)))
	}
}

export function shouldFetchPosts (state, doc) {
	const posts = state.postsByDoc[doc]
	if (!posts) {
		return true
	} else if (posts.isFetching) {
		return false
	} else {
		return posts.didInvalidate
	}
}

export function fetchPostsIfNeeded (doc) {
	return (dispatch, getState) => {
		if (shouldFetchPosts(getState(), doc)) {
			return dispatch(fetchPosts(doc))
		} else {
			return Promise.resolve()
		}
	}
}

