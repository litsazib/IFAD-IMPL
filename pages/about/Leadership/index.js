import LeaderShip from "../../../components/Layouts/about/leadership/LeaderShip"

import { getcotentModule } from '../../api/';
import { useState,useEffect } from "react"

const index = () => {

  const [leaderData, setleaderData] = useState([]);
  const [md, setmd] = useState([]);
  const [leader_team, setleader_team] = useState([]);

  useEffect(()=>{
    try {
      let moduleId = 1 // module id = AboutPage->Leadership
      let md_moduleId = 18 // module id = AboutPage->Leadersip for md 
      let leader_team_moduleId = 19 // module id = AboutPage->Leadersip for leader_team
      getcotentModule(moduleId).then((Result)=>{
        setleaderData(Result)
      })
      getcotentModule(md_moduleId).then((Result)=>{
        setmd(Result)
      })
      getcotentModule(leader_team_moduleId).then((Result)=>{
        setleader_team(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])



  return (
    <>
      <LeaderShip sendLeaderData={leaderData[0]} md={md[0]} leader_team={leader_team[0]}/>
    </>
  )
}

export default index