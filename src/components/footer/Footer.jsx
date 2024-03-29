import NavItem from "../utility/NavItem";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col gap-8 lg:flex-row justify-between items-center px-12 xl:px-0 xl:max-w-[1100px] mx-auto py-7 bg-light">
			<div className="text-light w-full">
				<nav>
					<ul className="flex gap-4 lg:gap-6 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						<li>
							<NavItem text="Start" dest="/" />
						</li>
						<li>
							<NavItem text="Über uns" dest="/about/history" />
						</li>
						<li>
							<NavItem text="Expertisen" dest="/about/products" />
						</li>
						<li>
							<NavItem text="Qualität" dest="/about/quality" />
						</li>
						<li>
							<NavItem text="Stellenangebote" dest="/jobs" />
						</li>
						<li>
							<NavItem text="Ansprechpartner" dest="/contact" />
						</li>
					</ul>
				</nav>
			</div>

			<div className="text-light flex flex-col">
				<div className="flex flex-column gap-4 mb-4 justify-center lg:justify-start">
					<a href="/">
						<i className="fa-brands fa-instagram fa-xl"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-facebook fa-xl"></i>
					</a>
					<a href="/">
						<i className="fa-brands fa-xl fa-linkedin"></i>
					</a>
				</div>
				<p className="text-base md:text-lg text-center md:text-left">
					©2023 Belhardt Label. All rights reserved.
				</p>
				<p className="flex flex-column gap-4 justify-center lg:justify-start">
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
