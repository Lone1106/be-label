import HeadingMain from "../utility/HeadingMain";
import Product from "./Product";

import ImageBottles from "../../img/bottles.png";
import TransparentBottles from "../../img/transparent.png";
import ImlCup from "../../img/iml.png";

const Products = () => {
	return (
		<section>
			<HeadingMain
				text="Unsere Expertisen"
				descr="Was wir ihnen bieten können."
			/>
			<div className="px-4 lg:px-44 py-12 flex flex-col gap-20">
				<Product
					title="Nassleimetiketten"
					image={ImageBottles}
					direction="lr"
				/>
				<Product title="Nassleimetiketten" image={ImlCup} direction="rl" />
				<Product
					title="transparente Folie"
					image={TransparentBottles}
					direction="lr"
				/>
			</div>
		</section>
	);
};

export default Products;