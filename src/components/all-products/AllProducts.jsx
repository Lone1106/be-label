import HeadingMain from "../utility/HeadingMain";
import Product from "./Product";
import HeadingSmall from "../utility/HeadingSmall";
import Cta from "../utility/Cta";

import ImageBottles from "../../img/bottles.png";
import TransparentBottles from "../../img/transparent.png";
import ImlCup from "../../img/iml.png";

const AllProducts = () => {
	return (
		<section>
			<HeadingMain
				text="Alle unsere Expertisen"
				descr="Alles was wir ihnen bieten können."
			/>
			<div className="py-12 px-12 xl:px-44 flex flex-col gap-20">
				<figure>
					<HeadingSmall text="Produktarten" />
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
						<Product title="Nassleimetiketten" image={ImageBottles} />
						<Product title="IML" image={ImlCup} />
						<Product
							title="transparente Folie"
							image={TransparentBottles}
						/>
						<Product title="Sonstiges" image={ImageBottles} />
					</div>
				</figure>

				<figure>
					<HeadingSmall text="Verdedelungen" />
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
						<Product title="Lack" image={ImageBottles} />
						<Product title="Perforation" image={ImlCup} />
						<Product title="Nummerierung" image={TransparentBottles} />
						<Product title="Rückseitendruck" image={ImageBottles} />
					</div>
				</figure>
			</div>
			<Cta />
		</section>
	);
};

export default AllProducts;
