import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router';

import { getCatagoryList } from './api/';
import Header from '../components/Layouts/PageHeader/PageHeader';
import Footer from '../pages/home/footer/Footer'



const Layout = ({children}) => {

	useEffect(()=>{
		try {
			getCatagoryList().then((Result)=>{
				setcatagoryItems(Result)
			})
		} catch (error) {
			console.log(error)
		}
	},[])

	const [catagoryItems, setcatagoryItems] = useState([]);
  const sendcatagoryItems = catagoryItems[0]?.product_category_list;
 
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
	
    return ( 
        <>
            <Header sendcatagoryItems={sendcatagoryItems}/>
                {children}
            <Footer />
        </>

    );
}

export default Layout;