import { Link } from "react-router-dom";

const ButtonBig = ({ text, dest }) => {
	return (
		<Link
			className="bg-brand w-max text-xl lg:text-xl tracking-wide text-light flex justify-center items-center rounded-lg px-4 py-2 lg:px-7 lg:py-3 font-bold hover:bg-tint active:bg-shade transition-colors"
			to={dest}
		>
			{text}
		</Link>
	);
};

export default ButtonBig;
