import Building from "../../img/building.png";
import ButtonMain from "../utility/ButtonMain";

const AboveFolds = () => {
	return (
		<section className="h-land overflow-hidden relative flex justify-center items-center">
			<img
				className="h-full object-cover lg:w-full lg:object-fit absolute -z-50"
				src={Building}
				alt="Picture of company building"
			/>
			<div className="flex flex-col gap-6 justify-center items-center px-4 lg:px-44 text-center w-full">
				<h1 className="text-light text-3xl md:text-5xl lg:text-7xl font-bold">
					Die innovativste Etikettendruckerei Europas.
				</h1>
				<p className="text-light text-sm md:text-lg">
					Ihr Partner in Sachen Etikettendruck in Europa, egal ob Offset-,
					Tief oder Digitaldruck. Papier, Folie oder IML, wir sind für die
					da!
				</p>
				<ButtonMain text="Erfahre mehr über uns" dest="/about/history" />
			</div>
		</section>
	);
};

export default AboveFolds;
