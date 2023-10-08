import ButtonSecondary from "../utility/ButtonSecondary";

const Product = ({ title, image, direction }) => {
	const classes =
		direction === "lr"
			? "flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 w-full"
			: "flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-8 w-full";

	const classesImgCont =
		direction === "lr"
			? "w-full md:w-1/5 flex justify-center md:justify-start"
			: "w-full md:w-1/5 flex justify-center md:justify-end";

	return (
		<figure className={classes}>
			<div className={classesImgCont}>
				<img src={image} alt="Product image" className="w-48" />
			</div>
			<div className="w-full h-full md:w-4/5 flex flex-col items-center lg:items-start justify-center gap-2">
				<h3 className="font-bold text-xl md:text-3xl">{title}</h3>
				<p className="text-base text-sm lg:text-lg">
					Lorem ipsum dolor sit amet consectetur. A lacinia bibendum eu
					fringilla sem ultricies. Vitae suspendisse sed blandit egestas eu
					consequat sit posuere id. Diam lectus amet varius sed. Ultrices
					enim nulla consectetur tincidunt nunc montes semper habitant.
					Elit adipiscing est iaculis adipiscing.
				</p>
				<ButtonSecondary
					text="erfahre mehr"
					dest="/about/products"
					type="secondary"
				/>
			</div>
		</figure>
	);
};

export default Product;
