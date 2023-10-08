const HistoryItem = ({ title, type }) => {
	const classes =
		type === "main"
			? "bg-brand rounded-full w-7 h-7"
			: "bg-light border-2 border-brand rounded-full w-7 h-7";

	return (
		<figure className="flex gap-4">
			<div>
				<div className={classes}></div>
			</div>
			<div>
				<h4 className="font-bold text-xl md:text-2xl">{title}</h4>
				<p className="text-base md:text-lg">
					Lorem ipsum dolor sit amet consectetur. Fermentum at integer
					turpis ultricies sed nisl sit adipiscing. Sed purus auctor mi
					phasellus sed ac urna laoreet in. Ante neque phasellus
					scelerisque ac laoreet dictum enim orci mauris. Sed sed vitae
					egestas vel. Sodales viverra gravida eu gravida accumsan.
					Venenatis nulla sapien elementum eros.
				</p>
			</div>
		</figure>
	);
};

export default HistoryItem;
