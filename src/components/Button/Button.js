import React from "react";

function Button(props) { // {
	// const { label } = props;
	return (
		<button>{props.children}</button>
	)
}

Button.defaultProps = {
	label: 'Enter label for button'
}

export default Button;