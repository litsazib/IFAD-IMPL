import PageAllProduct from '../../../components/Layouts/allproduct/PageAllProduct'
import AllProduct from '../../../styles/Product.module.scss'

const Allproduct = () => {
  return (
    <>
      <section id="allproduct" className={AllProduct.multiback}>
           <PageAllProduct/>
      </section>  
    </>
  )
}

export default Allproduct