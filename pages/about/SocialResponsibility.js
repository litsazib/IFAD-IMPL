import { useState,useEffect } from "react"
import Csr from "../../components/Layouts/about/csr/Csr"
import CsrBg from "../../components/Layouts/about/csr/CsrBg"
import CsrCard from '../../components/Layouts/about/csr/CsrData'

import { getcotentModule } from '../api/';

const SocialResponsibility = () => {
    const [csrData, setcsrData] = useState(CsrCard);

    useEffect(()=>{
      try {
        let moduleId = 9 // module id = AboutPage->CSR
        getcotentModule(moduleId).then((Result)=>{
          setsocialResData(Result)
        })
      } catch (error) {
        console.log(error)
      }
    },[])
  
    const [socialResData, setsocialResData] = useState([]);

    
    
  return (
    <>
    <CsrBg sendsocialResData={socialResData[0]}/>
    <Csr sendsocialResData={socialResData[0]}/>
    </>
  )
}

export default SocialResponsibility