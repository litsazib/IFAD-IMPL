import PageAbout from '../../../styles/About.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';
import Head from 'next/head';
import {linkBreak} from '../../../utils/common.js';

const PageMilestone = ({ sendcompanyData }) => {
	// const bgImg={
	// 	backgroundImage: `url(${sendcompanyData?.module_image})`,
	// };
	const contectLoop = sendcompanyData?.content_item.map((content, idx) => {
		return (
			<div className="row g-4" key={idx}>
				<div className="col-lg-8 col-md-6">
					<h2 className="font-calibri fw-bold p-2 font-poppins ">{content.item_name}</h2>
					<p className="justify p-2">{linkBreak(content.item_long_desc)}</p>
				</div>

				<div className="col-lg-4 col-md-6">
					<img src={content.item_image} alt={content.item_name} className="img-fluid img-size rounded-5" />
				</div>
			</div>
		);
	});
	return (
		<>
		<Head>
			<title>Company Review | IFAD Multi-product</title>
		</Head>
			<section id='company-review' className={PageAbout.milestone}>
				<img src={sendcompanyData?.module_image} alt={sendcompanyData?.module_name} className={PageAbout.bgimg} />
				<div className={PageAbout.image}>
					{/* <h1 className=" display-1 fw-bold text-center align-item-center">
						{sendcompanyData?.module_name ? sendcompanyData?.module_name : <BeatLoader color="#FA3" />}
					</h1> */}
				</div>
			</section>
			
			<section id="milestone" className="py-5">
				<div className="container">
					{contectLoop ? contectLoop : <p className="text-center">loading...</p>}
				</div>
			</section>
		</>
	);
};

export default PageMilestone;
