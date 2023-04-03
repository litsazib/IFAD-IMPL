import SingleProduct from '../../../styles/SingleProduct.module.scss';
import ProductTable from './ProductTable';
import OurPageProductBg from './OurPageProductBg';

import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Head from 'next/head';

const OurPageProduct = ({ productDetails }) => {
	const { product_name, product_long_desc, product_multi_images, product_lifestyle_image,Product_image} = productDetails;
console.log(Product_image)
	const slideImg = product_multi_images.map((img,idx) => {
		return (
			<Carousel.Item interval={1000} key={idx}>
				<img className="mx-auto d-block single-product-img" src={img} alt={product_name} />
			</Carousel.Item>
		);
	});

	return (
		<>
		  <Head>
				<title>{product_name} | IFAD Multi-product</title>
			</Head>
			<OurPageProductBg bgImg={product_lifestyle_image} alt={product_name} />
			<section id="">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mt-5">
							{slideImg.length === 0 ? (
								<img style={{width:"100%"}} src={Product_image} alt={product_name} />
							) : (
								<Carousel className="single-product">{slideImg}</Carousel>
							)}
						</div>
						<div className="col-lg-6">
							<h3 className="mt-5 display-4 color font-poppins-bold  fw-bolder">{product_name.toString()}</h3>
							<p className="font-poppins text-dark pt-3 pb-4">{product_long_desc.toString()}</p>
						</div>
					</div>
				</div>
			</section>
			<ProductTable productTableData={productDetails} />
		</>
	);
};

export default OurPageProduct;
