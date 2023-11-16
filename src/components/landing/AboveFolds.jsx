import Building from "../../img/building.webp";
import ButtonMain from "../utility/ButtonMain";

const AboveFolds = () => {
	return (
		<section className="h-land 2xl:h-[800px] overflow-hidden relative flex justify-center items-center">
			<img
				className="h-full object-cover lg:w-full lg:object-fit absolute -z-50"
				src={Building}
				alt="Picture of company building"
			/>
			<div className="flex flex-col gap-6 justify-center items-center px-12 xl:px-0 xl:max-w-[1100px] mx-auto text-center w-full">
				<h1 className="text-light text-3xl md:text-5xl lg:text-7xl font-bold">
					Die innovativste Etikettendruckerei Europas.
				</h1>
				<p className="text-light text-sm md:text-lg">
					Ihr Partner in Sachen Etikettendruck in Europa, egal ob Offset-,
					Tief oder Digitaldruck. Papier, Folie oder IML, wir sind für die
					da!
				</p>
				<ButtonMain
					text="Erfahren Sie mehr über uns"
					dest="/about/history"
				/>
			</div>
		</section>
	);
};

export default AboveFolds;
