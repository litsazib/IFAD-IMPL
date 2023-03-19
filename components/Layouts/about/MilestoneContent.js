import PageAbout from '../../../styles/About.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';
import Head from 'next/head';
import {linkBreak} from '../../../utils/common.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiUsers } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { TbStairsUp } from 'react-icons/tb';
import { RiTeamFill } from 'react-icons/ri';

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

			{/* values section start */}

			<section id="values" className='values'>
				<div className="container">
					<h1 className='text-center text-white value-align'>Values</h1>
				</div>
			</section>
			<section id="values-content" className=''>
				<div className="container">
					<div className="row">
						<div className='col-lg-3 text-center'>
							<div className="space-content">
								<Card className="value-content-bg rounded-4">
									{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
									<div>
										<FiUsers className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
									</div>
									<Card.Body>
										<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">CUSTOMER FOCUS</h4></Card.Title>
										<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
										We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</div>

						<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="value-content-bg rounded-4">
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<div>
									<FaHandshake className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">RESPONSIBILITIES</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="value-content-bg rounded-4">
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<div>
									<TbStairsUp className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">ASPIRATION</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="value-content-bg rounded-4">
								<div>
									<RiTeamFill className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">TEAMWORK</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					</div>
					
				</div>
			</section>

				{/* values section end */}
		</>
	);
};

export default PageMilestone;
