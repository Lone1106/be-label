const HeadingSmall = ({ text }) => {
	return (
		<div className="py-6 flex flex-col justify-center items-center mb-4">
			<h3 className="font-bold text-xl md:text-2xl">{text}</h3>
			<div className="flex justify-center items-center gap-1">
				<div className="bg-brand rounded-full w-2 h-2"></div>
				<div className="bg-brand rounded-full w-3 h-3"></div>
				<div className="bg-brand rounded-full w-2 h-2"></div>
			</div>
		</div>
	);
};

export default HeadingSmall;
