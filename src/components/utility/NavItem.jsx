import { NavLink } from "react-router-dom";

const NavItem = ({ text, dest }) => {
	return (
		<NavLink
			to={dest}
			className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
		>
			{text}
		</NavLink>
	);
};

export default NavItem;
