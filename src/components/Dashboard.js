import React, { PropTypes } from 'react'
import Link from './Link'

const TodoList = ({links, onTodoClick}) => (
  <ul>
    {links.map((todo) =>
      <Link
       key={todo.id}
	    {...todo}
		onClick={onTodoClick(todo.id)}/> // () => onTodoClick(todo.id)
    )}
	</ul>
)

TodoList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
/*

{links.map( (todo, index) =>
      <p key={index} onClick={e => onTodoClick(e)}>eee</p>
    )}
*/
export default TodoList
