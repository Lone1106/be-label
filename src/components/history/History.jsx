import HeadingMain from "../utility/HeadingMain";
import HistoryItem from "./HistoryItem";
import Cta from "../utility/Cta";

const History = () => {
	return (
		<section>
			<HeadingMain text="Über uns" descr="Ein paar Infos über uns." />
			<figure className="px-12 xl:px-44 py-20">
				<p className="mb-20 text-base md:text-lg">
					Lorem ipsum dolor sit amet consectetur. Fermentum at integer
					turpis ultricies sed nisl sit adipiscing. Sed purus auctor mi
					phasellus sed ac urna laoreet in. Ante neque phasellus
					scelerisque ac laoreet dictum enim orci mauris. Sed sed vitae
					egestas vel. Sodales viverra gravida eu gravida accumsan.
					Venenatis nulla sapien elementum eros. Tristique id tempus
					scelerisque eros. Felis lorem dignissim turpis platea sit sem
					integer.Quam vitae convallis blandit ornare sed urna facilisi.
					Arcu faucibus netus id pellentesque odio. Platea euismod in
					viverra sed pretium luctus cursus volutpat. Sed lobortis pulvinar
					diam vel eget id aliquam blandit tellus. Magna faucibus vitae
					mauris diam dui velit.
				</p>

				<div className="flex flex-col gap-8 relative after:block after:absolute after:w-1 after:h-full after:bg-brand after:left-3 after:-z-10">
					<HistoryItem title="Heute" type="main" />
					<HistoryItem title="2021" />
					<HistoryItem title="2019" />
					<HistoryItem title="2018" />
					<HistoryItem title="2017" />
					<HistoryItem title="2004" />
					<HistoryItem title="1951" />
				</div>
			</figure>
			<Cta />
		</section>
	);
};

export default History;
