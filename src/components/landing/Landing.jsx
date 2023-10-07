import HeadingMain from "../utility/HeadingMain";
import GroupLogos from "./GroupLogos";
import AboveFolds from "./AboveFolds";

const Landing = () => {
	return (
		<section>
			<AboveFolds />

			<GroupLogos />

			<figure>
				<HeadingMain
					text="Unsere Expertisen"
					descr="Was wir ihnen bieten können."
				/>
			</figure>
		</section>
	);
};

export default Landing;
