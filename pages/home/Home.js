import Banner from "./banner/Banner"
import Product from '../home/product/Product.js';
import Catalogue from "./catalogue/Catalogue";
import ContactForm from "./contactform.js/ContactForm";
import Blog from "./blog/Blog";
import Allproduct from "./allproduct/Allproduct";
// import Demo from "./demo/Demo";


const Home = () => {
  return (
    <>
     <Banner/> 
     <Product/> 
     <Allproduct/>
     <Catalogue/>
     <Blog/>
     {/* <ContactForm/> */}
    </>
  )
}

export default Home