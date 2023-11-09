import HeadingMain from "../utility/HeadingMain";

const Quality = () => {
	return (
		<section>
			<HeadingMain
				text="Qualität"
				descr="Wir sind mehr als nur qualitätsbewusst."
			/>

			<figure className="px-12 xl:px-60 flex flex-col xl:flex-row justify-between items-center pt-20 pb-32 gap-8">
				<div className="max-w-[650px]">
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet consectetur. Fermentum at integer
						turpis ultricies sed nisl sit adipiscing. Sed purus auctor mi
						phasellus sed ac urna laoreet in. Ante neque phasellus
						scelerisque ac laoreet dictum enim orci mauris. Sed sed vitae
						egestas vel. Sodales viverra gravida eu gravida accumsan.
						Venenatis nulla sapien elementum eros. Tristique id tempus
						scelerisque eros. Felis lorem dignissim turpis platea sit sem
						integer.Quam vitae convallis blandit ornare sed urna facilisi.
						Arcu faucibus netus id pellentesque odio. Platea euismod in
						viverra sed pretium luctus cursus volutpat. Sed lobortis
						pulvinar diam vel eget id aliquam blandit tellus. Magna
						faucibus vitae mauris diam dui velit.Lorem ipsum dolor sit amet
						consectetur.
					</p>
				</div>

				<div className="w-full max-w-[650px] flex justify-start xl:justify-end">
					<ul>
						<li className="mb-4">
							<a
								href="/"
								download
								className="flex gap-2 items-center justify-start hover:text-brand transition-colors"
							>
								<i className="fa-solid fa-file-pdf fa-lg text-brand"></i>
								ISO-0815
							</a>
						</li>
						<li className="mb-4">
							<a
								href="/"
								download
								className="flex gap-2 items-center justify-start hover:text-brand transition-colors"
							>
								<i className="fa-solid fa-file-pdf fa-lg text-brand"></i>
								ISO-0815/2
							</a>
						</li>
						<li className="mb-4">
							<a
								href="/"
								download
								className="flex gap-2 items-center justify-start hover:text-brand transition-colors"
							>
								<i className="fa-solid fa-file-pdf fa-lg text-brand"></i>
								ISO-0815/3
							</a>
						</li>
						<li className="mb-4">
							<a
								href="/"
								download
								className="flex gap-2 items-center justify-start hover:text-brand transition-colors"
							>
								<i className="fa-solid fa-file-pdf fa-lg text-brand"></i>
								ISO-0815/4
							</a>
						</li>
					</ul>
				</div>
			</figure>
		</section>
	);
};

export default Quality;
