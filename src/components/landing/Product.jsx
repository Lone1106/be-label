import ButtonSecondary from "../utility/ButtonSecondary";

const Product = ({ title, image, direction }) => {
	const classes =
		direction === "lr"
			? "flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-24 w-full"
			: "flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-24 w-full";

	const classesImgCont =
		direction === "lr"
			? "w-full md:w-1/4 flex justify-center md:justify-start"
			: "w-full md:w-1/4 flex justify-center md:justify-end";

	return (
		<figure className={classes}>
			<div className={classesImgCont}>
				<img src={image} alt="Product image" className="w-48 md:w-full" />
			</div>
			<div className="h-full w-full md:w-2/4 flex flex-col items-start justify-center gap-2">
				<h4 className="font-bold text-xl">{title}</h4>
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
