import PageBanner from '../../../components/Layouts/PageBanner/PageBanner';

import { useState,useEffect } from "react";
import { getcotentModule} from '../../api/';

const Banner = () => {

	useEffect(()=>{
		try {
			let moduleId = 14 // module id = Home Page sliding 
			getcotentModule(moduleId).then((Result)=>{
				setsliderImg(Result)
			})
		} catch (error) {
			console.log(error)
		}
	},[])

	const [sliderImg, setsliderImg] = useState([]);

	return (
		<>
			<section id='' className="position-relative">
				<PageBanner sliderImg={sliderImg[0]} />
			</section>
		</>
	);
};

export default Banner;
