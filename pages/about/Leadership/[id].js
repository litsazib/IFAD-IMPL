import { getcotentModule } from '../../api/';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LeaderShipDetails = ({ blogDetails }) => {
	const router = useRouter()
	const [Details, setDetails] = useState([]);

	let listOfData = Details[0]?.content_item
	
	const pid = router.query.id
	
	let ResultData = listOfData?.filter((ctx)=>{
		return ctx.id ===  parseInt(pid)
	})

	useEffect(() => {
		try {
			let moduleId = 1; // module id = AboutPage->Leadership
			getcotentModule(moduleId).then((Result) => {
				setDetails(Result);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			{typeof ResultData != 'undefined' &&
				ResultData.length > 0 ? (
			<>
			<section id="company-review" className="About_milestone__C8Zak">
				<img
					className="About_bgimg__UzovK img-fluid leader-banner-height"
					src="http://implcms.ifadgroup.com:8080/storage/picture/leader-centent-124362.png"

				/>
				<div className=" leader-banner-text">
					{/* <h1 className=" display-1 fw-bold text-center align-item-center">{ResultData[0].item_name?ResultData[0].item_name:"Not Found"}</h1> */}
				</div>
			</section>
			<section id="milestone" className="py-5">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-8 col-md-6">
							<h2 className="font-calibri fw-bold">{ResultData[0].item_name?ResultData[0].item_name:"Not Found"}</h2>
							<h4>{ResultData[0].item_short_desc}</h4>
							<p className="font-poppins justify p-2">
								{ResultData[0].item_long_desc?ResultData[0].item_long_desc:"Not Found"}
							</p>
						</div>
						<div className="col-lg-4 col-md-6">
							<img
								src={ResultData[0].item_image?ResultData[0].item_image:"#"}
								alt={ResultData[0].item_name.toString()}
								className="img-fluid img-size rounded-5"
							/>
						</div>
					</div>
				</div>
			</section>
			</>
				) : ('')
			}
		</>
	);
};

export default LeaderShipDetails;
