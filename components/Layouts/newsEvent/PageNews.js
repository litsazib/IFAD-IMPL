import MediaStyle from '../../../styles/Media.module.scss';
// import BeatLoader from "react-spinners/BeatLoader";
import Link from 'next/link';
import Show from '../../Layouts/newsEvent/Show';

const PageNews = ({ sendNewsData }) => {
	const newsEvents = sendNewsData.content_item;
	const newsEventsData = newsEvents?.map((ctx, idx) => {
		return (
				<div className="position-relative shadow p-3 mt-4 mb-4 bg-white rounded border border-secondary d-flex justify-content-between">
					<div className="row">
					<div className="col-lg-3 col-md-4 col-sm-12">
						<img variant="top" src={ctx.item_image} className="img-fluid newsevent-img w-100" />
					</div>
					<div className="col-lg-9 col-md-8 col-sm-12">
						<div className="ali">
							<div className="p-3">
								<h3 className="font-calibri news-title fs-3">{ctx.item_name}</h3>
								{/* <p className="font-noto pb-3 display-6 m-0 text-secondary">Date: {ctx.item_date}</p> */}

								<h6 className='pb-3 news-title-size'>
									<Show details={ctx.item_long_desc} />
								</h6>
							</div>
						</div>
						<div className="source-button-position">
						{!ctx.item_link == ""?							
							<Link href={ctx.item_link} passHref>
								<a className="btnViewSource border border-warning px-4 py-2 mt-3 mb-3 font-calibri" target="_blank">
									View Source
								</a>
							</Link>
							:("")
							}
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<section id="newsevent" className={MediaStyle.media}>
				<img src={sendNewsData.module_image} alt="" className={MediaStyle.bgimg} />
			</section>

			<div className="container">
				<h1 className=" display-1 fw-bold text-center mt-3 mb-3">
						{sendNewsData.module_name ? sendNewsData.module_name : <BeatLoader color="#FA3" />}
				</h1>
				{newsEventsData ? newsEventsData : <BeatLoader color="#FA3" />}
			</div>
		</>
	);
};
export default PageNews;
