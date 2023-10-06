import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = ({ comp }) => {
	return (
		<section>
			<Header />
			{comp}
			<Footer />
		</section>
	);
};

export default Wrapper;
