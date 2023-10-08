import ButtonMain from "./ButtonMain";

const Cta = () => {
	return (
		<section className="my-12 px-12 xl:px-44 bg-dark py-20 text-center flex flex-col justify-center items-center gap-4">
			<p className="font-bold text-light text-3xl">
				werde jetzt Teil unseres Teams und bewerbe dich!
			</p>
			<p className="text-light text-base md:text-lg">
				Wir sind immer auf der Suche nach talentierten Mitarbeitern.
			</p>
			<ButtonMain text="bewerbe dich jetzt!" dest="/jobs" />
		</section>
	);
};

export default Cta;
