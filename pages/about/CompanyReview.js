import MileStoneContent from '../../components/Layouts/about/MilestoneContent'

import { getcotentModule} from '../api/';
import { useEffect,useState } from "react"


const CompanyReview = () => {

  useEffect(()=>{
    try {
      let moduleId = 7 // module id = AboutPage->CompanyReview
      getcotentModule(moduleId).then((Result)=>{
        setcompanyData(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  const [companyData,setcompanyData] = useState([])


  return (
    <>
      <MileStoneContent sendcompanyData={companyData[0]}/>
    </>
  )
}

export default CompanyReview