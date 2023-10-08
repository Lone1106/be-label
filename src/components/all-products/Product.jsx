const Product = ({ title, image }) => {
	return (
		<figure className="flex flex-col justify-center lg:justify-between items-center gap-8 w-full">
			<div className="w-full flex justify-center">
				<img src={image} alt="Product image" className="w-48" />
			</div>
			<div className="w-full h-full flex flex-col items-start justify-start gap-2">
				<h4 className="font-bold text-xl">{title}</h4>
				<p className="text-base text-sm lg:text-lg">
					Lorem ipsum dolor sit amet consectetur. A lacinia bibendum eu
					fringilla sem ultricies. Vitae suspendisse sed blandit egestas eu
					consequat sit posuere id. Diam lectus amet varius sed. Ultrices
					enim nulla consectetur tincidunt nunc montes semper habitant.
					Elit adipiscing est iaculis adipiscing.
				</p>
			</div>
		</figure>
	);
};

export default Product;
