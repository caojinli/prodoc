import React, { PropTypes } from 'react'

const Link = ({ onClick, completed, text }) => {
	return (
				<li onClick={onClick}
					style={{
							textDecoration: completed ? 'line-through' : 'none'
					}}
				  >
					{text}
				</li>
	)
}
Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Link
