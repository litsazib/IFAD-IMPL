import PageFooter from '../../../components/Layouts/footer/PageFooter';
import SocialCard from '../../../components/Layouts/footer/SocialCard';
import Footerstyle from '../../../styles/Footer.module.scss';
import ContactIcon from '../../../components/Layouts/footer/ContactIcon';
import Copyright from '../../../components/Layouts/footer/Copyright';

import { getcotentModule } from '../../api/';
import { useEffect,useState } from 'react';

const Footer = () => {
	useEffect(()=>{
		try {
			let moduleId = 16 // module id = Socila Card 
      getcotentModule(moduleId).then((Result)=>{
        setSnsData(Result)
      })
		} catch (error) {
			console.log(error)
		}
	},[])

	const [SnsData,setSnsData] = useState([]); 
	return (
		<>
			<section id="footer" className={Footerstyle.background}>
				<div className="container-fluid">
					<div className="row">
						<PageFooter />
						<p className="text-center text-light font-corda pt-3 pb-5 m-0">{SnsData[0]?.module_name ? SnsData[0]?.module_name : "Title Not found!"}</p>
						<SocialCard sendSocialDta={SnsData} />
					</div>
				</div>
				<div className=" border-top border-bottom">
					<ContactIcon />
				</div>
				<div className="position-relative">
					<Copyright />
				</div>
			</section>
		</>
	);
};

export default Footer;
