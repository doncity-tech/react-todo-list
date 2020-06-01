import React from 'react';

const FilterButton = (props) => {
	return (
		<button
			onClick={async () => {
				await props.changeState(props.name);
				console.log(props.isPressed);
			}}
			aria-pressed={props.isPressed}>
			{props.name}
		</button>
	);
};

export default FilterButton;
