import { useRouter } from 'next/router';
import OurPageProduct from '../../components/Layouts/ourproduct/OurPageProduct';
import { getProductDetails} from '../api/';

import React from 'react'

function singlePrd({productDetails}) {

  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    
    <>
			<OurPageProduct productDetails={productDetails[0]} />
    </>
  )
  
}

export async function getServerSideProps(context) {
  // const id = context.query.id
  const productDetails = (await getProductDetails(context.params.id) || []);
  return {
    props: {
      productDetails
    } 
  }
}
export default singlePrd;




