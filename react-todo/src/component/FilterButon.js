import React from 'react';

const FilterButton = (props) => {
	return (
		<button
			aria-pressed={props.isPressed}
			onClick={() => {
				props.changeState(props.name);
			}}>
			{props.name}
		</button>
	);
};

export default FilterButton;
