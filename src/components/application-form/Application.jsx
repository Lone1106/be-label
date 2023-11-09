import HeadingMain from "../utility/HeadingMain";
import FormInput from "./FormInput";

const Application = () => {
	return (
		<section>
			<HeadingMain text="Bewerbe dich jetzt" hasDecsr={false} />

			<figure className="px-12 xl:px-60 py-10 md:py-24 flex justify-center">
				<form className="w-96">
					<FormInput
						label="Name"
						placeholder="Max Mustermann"
						type="text"
					/>
					<FormInput
						label="Email"
						placeholder="mail@musteremail.de"
						type="email"
					/>
					<FormInput
						label="Betreff"
						placeholder="Bewerbung ID7474"
						type="text"
					/>
					<button className="text-aside text-sm hover:text-tint active:text-shade transition-colors">
						Dokumente hochladen (PDF)
					</button>
					<button className="rounded-lg text-light font-bold w-full bg-brand mt-4 py-1 px-2 hover:bg-tint active:bg-shade transition-colors">
						jetzt bewerben
					</button>
				</form>
			</figure>
		</section>
	);
};

export default Application;
