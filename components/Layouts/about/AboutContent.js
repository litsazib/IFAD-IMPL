import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';
import Certificatestyle from '../../../styles/Certificate.module.scss';


const AboutContent = () => {
	const loaderProp =({ src }) => {
    return src;
  }   
	return (
		<>
			<section>
				<div className="container">
					<div className="row ">
						<h1 className="display-1 fw-bold text-center mt-5">Why Quality Certification ?</h1>
						<p className="mb-5 mt-3 fs-5 text-center">
							They can enhance brand recognition and guarantee your food product quality to your customers. <br />
							They also prove to authorities that the production site is safe and legal.
						</p>

						<div className="row mb-5">
							<div className="col-lg-6 text-center">
								{/* <img src="../policylogo/logoone.png" className="img-fluid" alt="" /> */}
								<Image className="img-fluid" src={'../policylogo/logoone.png'} width={1920} height={250} loader={loaderProp} />
							</div>
							<div className="col-lg-6 ">
								<div className="mt-5 mb-4 ">
									<h2 className="font-calibri fw-bold fs-2">Halal Certificate</h2>
									<p className="font-calibri mt-3 1rem">
										With a global consumer base of about 1.8 billion Muslims, which is expected to grow across 112 countries, the
										halal food market is expanding significantly and halal-prepared food products are in high demand.
									</p>
									<button className={Certificatestyle.certificate}>
										read more
										<BsArrowRight size={'20px'} />
									</button>
								</div>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-lg-6 ">
								<div className="mt-5 mb-4 ">
									<h2 className="font-calibri fw-bold fs-2">PLANT-BASED CERTIFICATION PROGRAM - PBS</h2>
									<p className="font-calibri mt-3 1rem">
										With a global consumer base of about 1.8 billion Muslims, which is expected to grow across 112 countries, the
										halal food market is expanding significantly and halal-prepared food products are in high demand.
									</p>
									<button className={Certificatestyle.certificate}>
										read more
										<BsArrowRight size={'20px'} />
									</button>
								</div>
							</div>
							<div className="col-lg-6 text-center">
								<img src="../policylogo/logotwo.png" className="img-fluid" alt="" />
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-lg-6 text-center">
								<img src="../policylogo/logothree.png" className="img-fluid" alt="" />
							</div>
							<div className="col-lg-6 ">
								<div className="mt-5 mb-4 ">
									<h2 className="font-calibri fw-bold fs-2">GMP+/FSA EN GMP+/FRA CERTIFICATION</h2>
									<p className="font-calibri mt-3 1rem">
										With a global consumer base of about 1.8 billion Muslims, which is expected to grow across 112 countries, the
										halal food market is expanding significantly and halal-prepared food products are in high demand.
									</p>
									<button className={Certificatestyle.certificate}>
										read more
										<BsArrowRight size={'20px'} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutContent;
