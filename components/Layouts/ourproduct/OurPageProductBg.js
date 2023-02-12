import SingleProduct from '../../../styles/SingleProduct.module.scss'

const OurPageProduct = ({bgImg,alt}) => {
	return (
		<>
		<section className={SingleProduct.productbg}>
			<img src={bgImg} alt={alt} className={SingleProduct.bgimg}/>

		</section>
		</>
	);
};

export default OurPageProduct;
