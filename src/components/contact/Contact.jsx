import HeadingMain from "../utility/HeadingMain";
import HeadingSmall from "../utility/HeadingSmall";
import ConactCard from "./ConactCard";
import Cta from "../utility/Cta";

import Image1 from "../../img/person1.png";
import Image2 from "../../img/person2.png";
import Image3 from "../../img/person3.png";
import Image4 from "../../img/person4.png";

const Contact = () => {
	return (
		<section>
			<HeadingMain
				text="Ansprechpartner"
				descr="So können Sie uns erreichen."
			/>
			<div className="px-12 xl:px-0 xl:max-w-[1100px] mx-auto py-12 flex flex-col gap-24">
				<figure>
					<HeadingSmall text="Geschäftsleitung" />
					<div className="flex justify-center lg:justify-between flex-wrap gap-4">
						<ConactCard name="Susi Sonnenschein" image={Image1} />
						<ConactCard name="Luca Todavia" image={Image2} />
						<ConactCard name="Reiner Zufall" image={Image3} />
						<ConactCard name="Max Mustermann" image={Image4} />
					</div>
				</figure>

				<figure>
					<HeadingSmall text="Verkauf Innendienst" />
					<div className="flex justify-center lg:justify-between flex-wrap gap-4">
						<ConactCard name="Susi Sonnenschein" image={Image1} />
						<ConactCard name="Luca Todavia" image={Image2} />
						<ConactCard name="Reiner Zufall" image={Image3} />
						<ConactCard name="Max Mustermann" image={Image4} />
					</div>
				</figure>

				<figure>
					<HeadingSmall text="Verkauf Außendienst" />
					<div className="flex justify-center lg:justify-between flex-wrap gap-4">
						<ConactCard name="Susi Sonnenschein" image={Image1} />
						<ConactCard name="Luca Todavia" image={Image2} />
						<ConactCard name="Reiner Zufall" image={Image3} />
						<ConactCard name="Max Mustermann" image={Image4} />
					</div>
				</figure>
			</div>
			<Cta />
		</section>
	);
};

export default Contact;
