import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollTop from "./ScrollTop";

const Wrapper = ({ comp }) => {
	return (
		<section>
			<ScrollTop />
			<Header />
			{comp}
			<Footer />
		</section>
	);
};

export default Wrapper;
