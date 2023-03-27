import MileStoneContent from '../../components/Layouts/about/MilestoneContent'
import { getcotentModule} from '../api/';
import { useEffect,useState } from "react"


const CompanyReview = () => {
  const [companyData,setcompanyData] = useState([])
  const [ValusData,setValusData] = useState([])
  const [MissionVission,setMissionVission] = useState([])

  useEffect(()=>{
    try {
      let moduleId = 7 // module id = AboutPage->CompanyReview
      let ValusId = 20 // module id = AboutPage->CompanyReview
      let MissionVissionMid = 21; // module id = AboutPage->Mission Vission image 
      getcotentModule(moduleId).then((Result)=>{
        setcompanyData(Result)
      })
      getcotentModule(ValusId).then((Result)=>{
        setValusData(Result)
      })
      getcotentModule(MissionVissionMid).then((Result)=>{
        setMissionVission(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <>
      <MileStoneContent MissionVission={MissionVission[0]} ValusData={ValusData} sendcompanyData={companyData[0]}/>
    </>
  )
}

export default CompanyReview