import ButtonSecondary from "../utility/ButtonSecondary";

const JobItem = ({ title, descr, jobId }) => {
	return (
		<figure className="flex flex-col gap-2 items-start max-w-[500px]">
			<div className="flex flex-col items-start">
				<h3 className="font-bold text-xl md:text-2xl">{title}</h3>
				<h4 className="text-lg font-bold">{descr}</h4>
				<p>{jobId}</p>
			</div>

			<p>
				Lorem ipsum dolor sit amet consectetur. Velit et eu dictumst sed
				quisque vel felis et. Pretium arcu sed diam venenatis amet purus.
				Odio amet in nulla ut elit amet ut. Id pharetra et donec quis
				congue viverra adipiscing neque dictumst. Dignissim pharetra in
				pellentesque curabitur fermentum dolor pharetra. A mi neque quisque
				mauris. Quis aliquet suspendisse cursus mi cras. Blandit eleifend
				viverra vitae vitae euismod elit tempus et mauris. Mauris risus ac
				condimentum ante massa. Sem lectus porttitor aliquam id rhoncus.
				Bibendum gravida et vestibulum vulputate laoreet. Viverra sit
				dignissim pellentesque dui vitae hendrerit auctor pharetra. Tempus
				at ultricies leo lacinia eros ullamcorper. Pulvinar neque leo est
				libero commodo varius viverra viverra quisque.
			</p>
			<ButtonSecondary
				text="jetzt bewerben"
				type="main"
				dest="/application"
			/>
		</figure>
	);
};

export default JobItem;
