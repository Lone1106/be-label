import { Link } from "react-router-dom";

const ButtonSecondary = ({ text, dest, type }) => {
	const classes =
		type === "main"
			? "tracking-wide mt-2 w-max rounded-lg px-3 py-1.5 font-bold text-base bg-brand hover:bg-tint active:bg-shade text-light transition-colors"
			: "tracking-wide mt-2 w-max border-2 border-brand rounded-lg px-3 py-1.5 font-bold text-base hover:bg-brand hover:border-brand hover:text-light active:border-shade active:bg-shade transition-colors";

	return (
		<Link to={dest} className={classes}>
			{text}
		</Link>
	);
};

export default ButtonSecondary;
