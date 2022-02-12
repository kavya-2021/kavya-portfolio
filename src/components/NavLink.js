import React from "react";

const NavLink = (props) => {
	return (
		<a href={props.link}>
			{props.children}
		</a>
	);
};

export default NavLink;
