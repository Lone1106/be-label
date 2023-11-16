import { NavLink } from "react-router-dom";
import { useState } from "react";

import NavItem from "../utility/NavItem";
import NavDropdown from "../utility/NavDropdown";
import Logo from "../../img/be-logo.png";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const mobileClasses = menuOpen
		? "lg:hidden w-full h-full bg-light fixed inset-0 flex justify-center items-center transition-all duration-500 opacity-100 visible"
		: "lg:hidden w-full h-full bg-light fixed inset-0 flex justify-center items-center transition-all duration-500 opacity-0 invisible";

	return (
		<header className="flex relative justify-between px-12 xl:px-0 xl:max-w-[1100px] mx-auto py-7 bg-light sticky z-50">
			<div className="w-full">
				<NavLink to="/">
					<img className="h-8 w-auto" src={Logo} alt="BE Label logo" />
				</NavLink>
			</div>
			<div className="w-full flex justify-end items-center">
				<div
					className="block lg:hidden cursor-pointer"
					onClick={toggleMenu}
				>
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

			{/*Mobile nav*/}
			<div className={mobileClasses}>
				<div
					className="absolute top-8 right-12 cursor-pointer"
					onClick={toggleMenu}
				>
					<i className="fa-solid fa-xmark fa-2xl"></i>
				</div>
				<nav className="">
					<ul className="flex justify-center items-center flex-col gap-8">
						<li onClick={toggleMenu}>
							<NavItem text="Start" dest="/" />
						</li>
						<li onClick={toggleMenu}>
							<NavItem text="Über uns" dest="/about/history" />
						</li>
						<li onClick={toggleMenu}>
							<NavItem text="Expertisen" dest="/about/products" />
						</li>
						<li onClick={toggleMenu}>
							<NavItem text="Qualität" dest="/about/quality" />
						</li>
						<li onClick={toggleMenu}>
							<NavItem text="Stellenangebote" dest="/jobs" />
						</li>
						<li onClick={toggleMenu}>
							<NavItem text="Ansprechpartner" dest="/contact" />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
