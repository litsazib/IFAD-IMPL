import MileStoneContent from '../../components/Layouts/about/MilestoneContent'
import { getcotentModule} from '../api/';
import { useEffect,useState } from "react"


const CompanyReview = () => {
  const [companyData,setcompanyData] = useState([])
  const [ValusData,setValusData] = useState([])

  useEffect(()=>{
    try {
      let moduleId = 7 // module id = AboutPage->CompanyReview
      let ValusId = 20 // module id = AboutPage->CompanyReview
      getcotentModule(moduleId).then((Result)=>{
        setcompanyData(Result)
      })
      getcotentModule(ValusId).then((Result)=>{
        setValusData(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <>
      <MileStoneContent ValusData={ValusData} sendcompanyData={companyData[0]}/>
    </>
  )
}

export default CompanyReview