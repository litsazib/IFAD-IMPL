import React from 'react';
import PageAbout from '../../../../styles/About.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';
import Link from 'next/link';
import Head from 'next/head';

const LeaderShip = ({ sendLeaderData }) => {
	const LeaderShip = sendLeaderData?.content_item;

	const topLeader = LeaderShip?.map((item)=>{
		if(item.item_short_desc == "Chairman" || item.item_short_desc == "Director") {
			return (
				<div className="col-lg-4 col-sm-6" key={item.id}>
					<div className="first text-center">
						<div className={PageAbout.leaderImg}>
							<Link href={`/about/Leadership/${item.id}`}>
								<a>
									<img src={item.item_image} 	alt={item.item_name.toString()} className="img-fluid" />
								</a>
							</Link>
						</div>
						<h3 className={PageAbout.leaderName}>{item.item_name}</h3>
						<p className={PageAbout.titledesign}>{item.item_short_desc}, IFAD Group</p>
					</div>
				</div>
			)
		}
	}); 



	const LeaderShipContent = LeaderShip?.map((item) => {
		if(item.item_short_desc !== "Chairman" && item.item_short_desc !== "Director") {
			return (
				<div className="col-lg-4 col-sm-6" key={item.id}>
					<div className="first text-center">
						<div className={PageAbout.leaderImg}>
							<Link href={`/about/Leadership/${item.id}`}>
								<a>
									<img src={item.item_image} alt={item.item_name.toString()} className="img-fluid" />
								</a>
							</Link>
						</div>
						<h3 className={PageAbout.leaderName}>{item.item_name}</h3>
						<p className={PageAbout.titledesign}>{item.item_short_desc}</p>
					</div>
				</div>
			)
		}
	});

	return (
		<>
			<Head>
				<title>BOD | IFAD Multi-product</title>
			</Head>
			<section className={PageAbout.productbg}>
				<img src={sendLeaderData?.module_image} alt="" className={PageAbout.bgimg} />

			</section>

			<section>
				<div className="container">
				<h1 className=" display-1 fw-bold text-center mt-5 mb-5">
					{sendLeaderData?.module_name ? sendLeaderData?.module_name : <BeatLoader color="#FA3" />}
				</h1>
					{/* <h1 className={PageAbout.leader_title}>{sendLeaderData?.module_description}</h1> */}
					<div className="row g-4 justify-content-md-center">
						{topLeader ? topLeader : <h1 className="text-center">Loading...</h1>}
					</div>
					<div className="row g-4 mt-5">{LeaderShipContent ? LeaderShipContent : <h1 className="text-center">Loading...</h1>}</div>
				</div>
			</section>
		</>
	);
};
export default LeaderShip;

