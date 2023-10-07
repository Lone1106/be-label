import Logo from "../../img/be-logo.png";

const LogoItem = ({ color }) => {
	const logoClasses = `w-full h-full absolute inset-0 mix-blend-hue ${color}`;
	return (
		<div className="relative">
			<div className={logoClasses}></div>
			<img src={Logo} alt="Company logo 1" />
		</div>
	);
};

export default LogoItem;
