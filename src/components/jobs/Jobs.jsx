import HeadingMain from "../utility/HeadingMain";
import JobItem from "./JobItem";

const Jobs = () => {
	return (
		<section>
			<HeadingMain
				text="Stellenangebote"
				descr="Werde teil unseres Teams."
			/>

			<div className="px-12 xl:px-44 py-20 flex flex-col gap-12">
				<JobItem
					title="Ausbilding Mediengestalter m/w/d"
					descr="3 jährige Berufsausbildung"
					jobId="ID4754"
				/>
				<JobItem
					title="Medientechnologe m/w/d"
					descr="38 Stunden Vollzeit - 3 Schicht"
					jobId="ID9921"
				/>
				<JobItem
					title="Industriekaufmann m/w/d"
					descr="35 Stunden Vollzeit - Hybrid"
					jobId="ID0028"
				/>
			</div>
		</section>
	);
};

export default Jobs;
