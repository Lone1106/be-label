import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavItem from "../utility/NavItem";

const NavDropdown = ({ title, destMain }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const resetDropdown = () => setIsOpen(false);
	const dropdownClasses = `w-full overflow-hidden bg-light rounded py-2 absolute origin-top transition-all ${
		isOpen ? "scale-100" : "scale-0"
	}`;

	return (
		<li className="relative">
			<NavLink
				onClick={resetDropdown}
				to={destMain}
				className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
			>
				{title}
			</NavLink>
			<i
				className="fa-solid fa-chevron-down ml-2 cursor-pointer"
				onClick={toggleDropdown}
			></i>

			<ul className={dropdownClasses}>
				<li className="py-2 text-center" onClick={resetDropdown}>
					<NavItem text="Expertisen" dest="/about/products" />
				</li>
				<li className="py-2 text-center" onClick={resetDropdown}>
					<NavItem text="Qualität" dest="/about/quality" />
				</li>
			</ul>
		</li>
	);
};

export default NavDropdown;
