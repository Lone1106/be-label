import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../img/be-logo.png";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const resetDropdown = () => setIsOpen(false);
	const dropdownClasses = `w-full overflow-hidden bg-light rounded py-2 absolute origin-top transition-all ${
		isOpen ? "scale-100" : "scale-0"
	}`;

	return (
		<header className="flex justify-between px-4 lg:px-44 py-7 bg-light sticky">
			<div className="w-full">
				<NavLink to="/">
					<img className="h-full" src={Logo} alt="BE Label logo" />
				</NavLink>
			</div>
			<div className="w-full flex justify-end items-center">
				<div className="block lg:hidden cursor-pointer">
					<i className="fa-solid fa-bars fa-xl"></i>
				</div>

				<nav className="hidden lg:block">
					<ul className="flex gap-10">
						<li className="">
							<NavLink
								to="/"
								className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
							>
								Start
							</NavLink>
						</li>
						<li className="relative">
							<NavLink
								onClick={resetDropdown}
								to="/about/history"
								className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
							>
								Über uns
							</NavLink>
							<i
								className="fa-solid fa-chevron-down ml-2 cursor-pointer"
								onClick={toggleDropdown}
							></i>

							<ul className={dropdownClasses}>
								<li className="py-2 text-center" onClick={resetDropdown}>
									<NavLink
										to="/about/products"
										className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
									>
										Expertisen
									</NavLink>
								</li>
								<li className="py-2 text-center" onClick={resetDropdown}>
									<NavLink
										to="/about/quality"
										className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
									>
										Qualität
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink
								to="/jobs"
								className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
							>
								Stellenangebote
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className="relative after:block after:absolute after:w-0 hover:after:w-6 after:transition-all after:h-0.5 after:bg-brand after:left-1/2 after:translate-x-neg after:origin-center"
							>
								Kontaktpersonen
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
