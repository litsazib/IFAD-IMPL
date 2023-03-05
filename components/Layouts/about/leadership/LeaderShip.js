import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PageAbout from '../../../../styles/About.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';
import Link from 'next/link';
import Head from 'next/head';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const LeaderShip = ({ sendLeaderData,md,leader_team }) => {

	const LeaderShip = sendLeaderData?.content_item;

	const mdLoop = md?.content_item.map((ctx,idx)=>{
		const {item_name,item_image,item_short_desc,item_long_desc,id} = ctx
		return (
			<>
				<div className="text-center mb-5">
					<Link href={`/about/Leadership/${id}`}>
						<a>
						<img src={item_image} className="img-fluid new-leadership-team"/>
						</a>
					</Link>
					<h2 className="pt-2 m-0">{item_name}</h2>
					<p className="">{item_short_desc}</p>
				</div>
			</>
		)
	})
	const leader_team_Loop = leader_team?.content_item.map((ctx,idx)=>{
		const {item_name,item_image,item_short_desc,item_long_desc,id} = ctx
		return (
			<>
				<div className='col-lg-3'>
				<div className="text-center">
				<Link href={`/about/Leadership/${id}`}>
					<a>
						<img src={item_image} className="new-team-member"/>
					</a>
				</Link>
					<h4 className="pt-2 m-0">{item_name}</h4>
					<p className="">{item_short_desc}</p>
				</div>
				</div>
			</>
		)
	})
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
			
			<section>
				<div className="container">
					<h1 className=" display-1 fw-bold text-center mt-5 mb-5">
						Leadership Team
						{/* {md?.module_name ? md?.module_name: <BeatLoader color="#FA3" />} */}
					</h1>
					{mdLoop ? mdLoop : <BeatLoader color="#FA3"/>}
				</div>
			</section>

			<section>
				<div className="contaier">
					<div className="d-flex justify-content-around">
						<div className='row'>
						{leader_team_Loop}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default LeaderShip;

