//the place where define actions
//This is reducer
const SHOW_LINK= 'SHOW_LINK'

const initialState = {
  links: [{id:1,completed:false, text:'My Personal Data'},{id:2,completed:false, text:'My Health'}, {id:3,completed:false, text:'My Career'}, {id:4,completed:false, text:'General'}, {id:5,completed:false, text:'Admin'}]
}



export function chooseAll(){
	
}
export const actions={
	chooseAll
}

//------------
//reducer
//-----------
export default function tryToHandleAction(state=initialState, action){
	
	return state
	
}

