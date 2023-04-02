import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { getProductList,getCatagoryList} from '../api/';
import ProductCard from '../../components/Layouts/product/ProductCard'
import Head from 'next/head';

const Product = ({productList,calagoyList}) => {
  const [productData, setproductData] = useState(productList);
  const [catagoryData, setcatagoryData] = useState(calagoyList[0]?.product_category_list);
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
    	<Head>
				<title>Product | IFAD Multi-product</title>
			</Head>
      <ProductCard products={productData} catagorys={catagoryData}/>
    </>
  )
}

export async function getStaticProps() {
  const productList = (await getProductList());
  const calagoyList = (await getCatagoryList()) || [];

  return {
    props: { 
      productList,
      calagoyList
     },
    revalidate: 10 
  };
}


export default Product;


