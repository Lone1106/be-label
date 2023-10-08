import GroupLogos from "./GroupLogos";
import AboveFolds from "./AboveFolds";
import Products from "./Products";
import Cta from "../utility/Cta";
import Info from "./Info";

const Landing = () => {
	return (
		<section>
			<AboveFolds />
			<Info />
			<GroupLogos />
			<Products />
			<Cta />
		</section>
	);
};

export default Landing;
