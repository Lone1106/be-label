import LogoItem from "../utility/LogoItem";

const GroupLogos = () => {
	return (
		<section className="bg-light w-full flex-wrap gap-4 py-8 px-12 xl:px-60 flex items-center justify-between mb-8">
			<LogoItem />
			<LogoItem color="bg-green-400" />
			<LogoItem color="bg-blue-400" />
			<LogoItem color="bg-yellow-400" />
			<LogoItem color="bg-orange-400" />
			<LogoItem color="bg-pink-400" />
		</section>
	);
};

export default GroupLogos;
