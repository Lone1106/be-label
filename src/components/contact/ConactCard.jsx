const ContactCard = ({ name, image }) => {
	return (
		<figure className="">
			<div className="w-50 h-50 mb-2">
				<img
					src={image}
					alt="Image of contact person"
					className="rounded-tl-lg rounded-tr-lg"
				/>
			</div>
			<div>
				<ul>
					<li className="font-bold text-lg">{name}</li>
					<li className="flex gap-2 items-center justify-start">
						<i className="fa-solid fa-envelope"></i>
						<p>muster@emailadresse.de</p>
					</li>
					<li className="flex gap-2 items-center justify-start">
						<i className="fa-solid fa-phone"></i>
						<p>00815 / 888 21 00 </p>
					</li>
				</ul>
			</div>
		</figure>
	);
};

export default ContactCard;
