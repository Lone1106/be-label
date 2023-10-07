import { NavLink } from "react-router-dom";

import NavItem from "../utility/NavItem";
import NavDropdown from "../utility/NavDropdown";
import Logo from "../../img/be-logo.png";

const Header = () => {
	return (
		<header className="flex justify-between px-4 lg:px-44 py-7 bg-light sticky">
			<div className="w-full">
				<NavLink to="/">
					<img className="h-8 w-auto" src={Logo} alt="BE Label logo" />
				</NavLink>
			</div>
			<div className="w-full flex justify-end items-center">
				<div className="block lg:hidden cursor-pointer">
					<i className="fa-solid fa-bars fa-xl"></i>
				</div>

				<nav className="hidden lg:block">
					<ul className="flex gap-10">
						<li>
							<NavItem text="Start" dest="/" />
						</li>
						<NavDropdown title="Über uns" destMain="/about/history" />
						<li>
							<NavItem text="Stellenangebote" dest="/jobs" />
						</li>
						<li>
							<NavItem text="Ansprechpartner" dest="/contact" />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
