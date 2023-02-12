import SingleProduct from '../../../styles/SingleProduct.module.scss';
import { youtube_parser,isYoutubeUrl} from '../../../utils/common.js';

import { FaBeer } from 'react-icons/fa';
import Link from 'next/link';

const ProductTable = ({productTableData}) => {
	const {
		product_name,
		proudct_video,
		product_lifestyle_image,
		video_link,
		product_bncn,
		segment,
		packtype,
		proudct_brochure
	} = productTableData;

	const youtube_vid = `https://www.youtube.com/embed/${youtube_parser(video_link)}`;

	return (
		<>
			<section className="mt-5 mb-5">
				<div className="container">
					<div className="row">
						<h1 className='text-center mb-5 display-4 color font-poppins-bold fw-bolder'>
							Product Info
							</h1>
						<div className="col-lg-6">
							<div className="detail-table">
								<table className="table table-bordered border-dark">
									<thead>
										<tr>
											<th scope="col">1</th>
											<th scope="col">Name</th>
											<th scope="col" className="fw-normal">
												{product_name}
											</th>
										</tr>
									</thead>
									
									{/* <thead>
										<tr>
											<th scope="col">2</th>
											<th scope="col">BCN</th>
											<th scope="col" className="fw-normal">
												// {product_bncn}
											</th>
										</tr>
									</thead> */}

									<thead>
										<tr>
											<th scope="col">2</th>
											<th scope="col">SIZE</th>
											<th scope="col" className="fw-normal">
												{segment?.segment_name}
											</th>
										</tr>
									</thead>

									<thead>
										<tr>
											<th scope="col">3</th>
											<th scope="col">TYPE</th>
											<th scope="col" className="fw-normal">
												{packtype?.pack_type_name}
											</th>
										</tr>
									</thead>

									<thead>
										<tr>
											<th scope="col">4</th>
											<th scope="col">BROCHURE</th>
											<th scope="col" className="fw-normal">
												<a target="_blank" href={proudct_brochure.toString()}>View</a>
											</th>
										</tr>
									</thead>

								</table>
							</div>
						</div>
						<div className="col-md-6">
							<div className="bachground text-center">
									{
										video_link == null?
										<video poster={product_lifestyle_image} className='videoPlay' width="100%" height="350px" controls >
											<source src={proudct_video?proudct_video:"#"} type="video/mp4"/>
										</video>
										:
										<div className="embed-responsive embed-responsive-16by9 w-100">
											<iframe
												width="560"
												height="315"
												src={youtube_vid}
												title="YouTube video player"
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>

											{/* <video className='videoPlay' width="100%" height="auto" controls >
												<source src={proudct_video?proudct_video:"#"} type="video/mp4"/>
											</video> */}
										</div>
									}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductTable;
