import PageReach from "../../components/Layouts/globalReach/PageReach"

import { getcotentModule , getDocuments} from '../api';
import React, { useEffect, useState } from 'react';


const index = () => {

    const [CountryList,setCountryList] = useState([])
    const [fileUrl, setfileUrl] = useState([]);

    const GlobalCatalog = fileUrl.find((catagory)=>{
		return catagory.category_name === "Global"
	})

    useEffect(()=>{
        try {
        let moduleId = 6 // module id = Global Reach
        getcotentModule(moduleId).then((Result)=>{
            setCountryList(Result)
        })
        getDocuments().then((Result) => {
            setfileUrl(Result);
        });
        } catch (error) {
            console.log(error)
        }
	},[])

    return (
        <>
            <PageReach sendGS={CountryList[0]} GlobalCatalog={GlobalCatalog} />
        </>
    )
}

export default index