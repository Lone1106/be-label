import NavItem from "../utility/NavItem";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col gap-8 lg:flex-row justify-between items-center px-6 lg:px-44 py-7 bg-dark">
			<div className="text-light w-full">
				<nav>
					<ul className="flex gap-4 lg:gap-6 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						<li className="text-light">
							<NavItem text="Start" dest="/" />
						</li>
						<li className="text-light">
							<NavItem text="Über uns" dest="/about/history" />
						</li>
						<li className="text-light">
							<NavItem text="Expertisen" dest="/about/products" />
						</li>
						<li className="text-light">
							<NavItem text="Qualität" dest="/about/quality" />
						</li>
						<li className="text-light">
							<NavItem text="Stellenangebote" dest="/jobs" />
						</li>
						<li className="text-light">
							<NavItem text="Ansprechpartner" dest="/contact" />
						</li>
					</ul>
				</nav>
			</div>

			<div className="text-light flex flex-col">
				<div className="flex flex-column gap-4 mb-4 justify-center lg:justify-start">
					<a href="/">
						<i className="fa-brands fa-instagram fa-xl text-light"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-facebook fa-xl text-light"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-xl fa-linkedin text-light"></i>
					</a>
				</div>
				<p className="text-light">
					©2023 Belhardt Label. All rights reserved.
				</p>
				<p className="text-light flex flex-column gap-4 justify-center lg:justify-start">
					<a href="/" className="underline">
						Impressum
					</a>
					<a href="/" className="underline">
						Datenschutz
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
