import Building from "../../img/building.png";
import ButtonMain from "../utility/ButtonMain";

const AboveFolds = () => {
	return (
		<figure className="h-land overflow-hidden relative flex justify-center items-center">
			<img
				className="h-full object-cover lg:w-full lg:object-fit absolute -z-50"
				src={Building}
				alt="Picture of company building"
			/>
			<div className="flex flex-col gap-6 justify-center items-center px-4 lg:px-44 text-center">
				<h1>
					<span className="text-light text-4xl lg:text-7xl font-bold block">
						Die innovativste
					</span>
					<span className="text-light text-4xl lg:text-7xl font-bold block">
						Etikettendruckerei Europas.
					</span>
				</h1>
				<p className="text-light">
					Ihr Partner in Sachen Etikettendruck in Europa, egal ob Offset-,
					Tief oder Digitaldruck. Papier, Folie oder IML, wir sind für die
					da!
				</p>
				<ButtonMain text="Erfahre mehr über uns" dest="/about/history" />
			</div>
		</figure>
	);
};

export default AboveFolds;
