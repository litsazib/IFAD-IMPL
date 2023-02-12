import PageProduct from '../../../components/Layouts/PageProduct/PageProduct';
import Productstyle from '../../../styles/Product.module.scss'

import { useState,useEffect } from "react";
import { getcotentModule} from '../../api/';


const Product = () => {

	const [loading, setloading] = useState(true);

	useEffect(()=>{
		try {
			let moduleId = 3 // module id = who we are section 
			getcotentModule(moduleId).then((Result)=>{
				setproductImage(Result)
				setloading(false)
			})
		} catch (error) {
			console.log(error)
		}
	},[])

	const [productImage, setproductImage] = useState([]);

	const sectionbg = productImage[0]?.module_color;
	
	return (
		<>
			<section className={Productstyle.backgroundc} style={ sectionbg ? { background:`${productImage[0].module_color}`} : {background:'#f7f7f7'}}>
				<div className="container">
					<div className="row text-center">
						{
							loading ? <h1 className='text-center h50'>Loading...</h1> :
							<PageProduct sendData={productImage[0]}/>
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default Product;
