import InfoItem from "./InfoItem";

const Info = () => {
	return (
		<section className="px-12 xl:px-44 flex flex-col md:flex-row justify-between items-center gap-12 my-12">
			<InfoItem title="Qualität seit Jahrzehnten." icon="fa-star" />
			<InfoItem title="Schneller Ablauf und Lieferung." icon="fa-clock" />
			<InfoItem title="Immer für Sie da." icon="fa-handshake" />
		</section>
	);
};

export default Info;
