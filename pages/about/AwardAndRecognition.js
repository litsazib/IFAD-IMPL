import Award from '../../components/Layouts/about/award/Award';
import AwardBg from '../../components/Layouts/about/award/AwardBg';

import { getcotentModule} from '../api/';
import { useEffect,useState } from "react"

const AwardAndRecognition = () => {

	useEffect(()=>{
    try {
      let moduleId = 8 // module id = AboutPage->Award & Recognition
      getcotentModule(moduleId).then((Result)=>{
        setawardData(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  const [awardData,setawardData] = useState([])
	return (
		<>
			<AwardBg sendawardData={awardData[0]}/>
			<section id='awardSlick' className='award_slick_custom'>
				<h2 className="text-center font-Corda fw-bolder text-warning mt-5 mb-5">
				{awardData[0]?.module_name}
				</h2>
					<div className="row">
						<Award sendawardData={awardData[0]}/>
					</div>
			</section>
		</>
	);
};

export default AwardAndRecognition;
