import { getcotentModule } from '../../api/';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {linkBreak} from '../../../utils/common.js'

const LeaderShipDetails = () => {
	const router = useRouter()
	const [Details, setDetails] = useState([]);
	const [DetailsMD, setDetailsMD] = useState([]);
	const [DetailsTeam, setDetailsTeam] = useState([]);

	let listOfData = Details[0]?.content_item
	let listOfMdData =  DetailsMD[0]?.content_item
	let listOfTemeData = DetailsTeam[0]?.content_item

	let combinedArray = []
	if(typeof listOfData != 'undefined' && listOfData.length > 0 && typeof listOfMdData != 'undefined' && listOfMdData.length > 0 && typeof listOfTemeData != 'undefined' && listOfTemeData.length > 0) {
		combinedArray.push(...listOfData, ...listOfMdData, ...listOfTemeData)
		console.log(combinedArray)
	}

	const pid = router.query.id
	
	let ResultData = combinedArray?.filter((ctx)=>{
		return ctx.id ===  parseInt(pid)
	})

	useEffect(() => {
		try {
			let moduleId = 1; // module id = AboutPage->Leadership
			getcotentModule(moduleId).then((Result) => {
				setDetails(Result);
			});
			getcotentModule(18).then((Result) => {
				setDetailsMD(Result);
			});
			getcotentModule(19).then((Result) => {
				setDetailsTeam(Result);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
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
			{typeof ResultData != 'undefined' &&
				ResultData.length > 0 ? (
				<section id="milestone" className="py-5">
					<div className="container">
						<div className="row g-4">
							<div className="col-lg-8 col-md-6">
								<h2 className="font-calibri fw-bold">{ResultData[0].item_name?ResultData[0].item_name:"Not Found"}</h2>
								<h4>{ResultData[0].item_short_desc}</h4>
								<p className="font-poppins justify">
									{ResultData[0].item_long_desc ? linkBreak(ResultData[0].item_long_desc): "Not Found"}
								</p>
								<button className='btn customBtn' type="button" onClick={() => router.back()}>
									Click here to go back
								</button> 
							</div>
							<div className="col-lg-4 col-md-6">
								<img
									style={{objectFit: "unset"}}
									src={ResultData[0].item_image?ResultData[0].item_image:"#"}
									alt={ResultData[0].item_name.toString()}
									className="img-fluid img-size rounded-5"
								/>
							</div>
						</div>
					</div>
				</section>
				) : ('')
			}
		</>
	);
};

export default LeaderShipDetails;
