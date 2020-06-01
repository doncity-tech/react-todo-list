import React from 'react';

const FilterButton = (props) => {
	return (
		<button
			onClick={() => {
				props.changeState(props.name);
			}}
			aria-pressed={props.isPressed}>
			{props.name}
		</button>
	);
};

export default FilterButton;
