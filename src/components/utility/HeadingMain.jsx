const HeadingMain = ({ text, descr }) => {
	return (
		<div className="bg-dark py-6 flex flex-col justify-center items-center gap-2">
			<h2 className="text-light text-3xl font-bold tracking-wide">
				{text}
			</h2>
			<div className="flex justify-center items-center gap-2">
				<div className="bg-brand rounded-full w-3 h-3"></div>
				<div className="bg-brand rounded-full w-4 h-4"></div>
				<div className="bg-brand rounded-full w-3 h-3"></div>
			</div>
			<p className="text-light">{descr}</p>
		</div>
	);
};

export default HeadingMain;
