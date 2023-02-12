import AwardBackground from '../../../../styles/Award.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';

const AwardBg = ({ sendawardData }) => {
	return (
		<>
			<section className={AwardBackground.award}>
				<img src={sendawardData?.module_image} alt="" className={AwardBackground.bgimg} />
				{/* <div className={AwardBackground.image}> */}
					<h1 className="display-1 fw-bold text-center align-item-center vertical-align align-middle">
						{sendawardData?.module_name ? sendawardData?.module_name : <BeatLoader color="#FA3" />}
					</h1>
				{/* </div> */}
			</section>
		</>
	);
};

export default AwardBg;
