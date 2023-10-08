const InfoItem = ({ title, icon }) => {
	const iconClass = `${icon} fa-regular fa-2xl text-brand`;
	return (
		<figure>
			<div className="flex gap-2 justify-start items-center mb-2">
				<i className={iconClass}></i>
				<p className="font-bold text-xl">{title}</p>
			</div>

			<p className="text-base md:text-lg">
				A lacinia bibendum eu fringilla sem ultricies. Vitae suspendisse
				sed blandit egestas eu consequat sit posuere id.
			</p>
		</figure>
	);
};

export default InfoItem;
