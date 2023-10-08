const Loading = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center gap-2">
			<div className="bg-brand rounded-full w-3 h-3 animate-bounce"></div>
			<div className="bg-brand rounded-full w-4 h-4 animate-bounce"></div>
			<div className="bg-brand rounded-full w-3 h-3 animate-bounce"></div>
		</div>
	);
};

export default Loading;
