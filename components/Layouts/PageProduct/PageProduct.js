import Productstyle from '../../../styles/Product.module.scss';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const PageProduct = ({ sendData }) => {

	return (
		<>
			<div className="col-lg-4 col-md-4 col-sm-6">
				<div className="product product_text p-3">
					<h2 className="font-Corda display-1 text-secondary text-start mgn-top align-baseline">{sendData?.module_name}</h2>
					<p className={Productstyle.content}>
						{sendData?.module_description}
					</p>
				</div>
			</div>

			{sendData?.content_item.map((curElem,idx) => {
				return (
						<div className="col-lg-4 col-md-4 col-sm-6" key={idx}>
							<div className="product mt-4 product-shadow rounded-4">
								<img src={curElem.item_image} className="img-fluid rounded-4 shadow" alt="Responsive image" />
							</div>
						</div>
				);
			})}

			
			<div className="col-lg-12">
				<div className="mt-4">
					{/* // <Link href="/product/">
					// 	<Button className={Productstyle.button}>All Products</Button>
					// </Link> */}
				</div>
			</div>
		</>
	);
};

export default PageProduct;
