const HeadingMain = ({ text, descr, hasDescr = true }) => {
	return (
		<div className="bg-dark py-6 flex flex-col justify-center items-center gap-2">
			<h2 className="text-light tracking-wide font-bold text-2xl md:text-4xl">
				{text}
			</h2>
			<div className="flex justify-center items-center gap-2">
				<div className="bg-brand rounded-full w-3 h-3"></div>
				<div className="bg-brand rounded-full w-4 h-4"></div>
				<div className="bg-brand rounded-full w-3 h-3"></div>
			</div>
			{hasDescr && (
				<p className="text-light text-sm md:text-lg">{descr}</p>
			)}
		</div>
	);
};

export default HeadingMain;
