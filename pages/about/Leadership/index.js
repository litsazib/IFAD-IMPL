import LeaderShip from "../../../components/Layouts/about/leadership/LeaderShip"

import { getcotentModule } from '../../api/';
import { useState,useEffect } from "react"

const index = () => {

  useEffect(()=>{
    try {
      let moduleId = 1 // module id = AboutPage->Leadership
      getcotentModule(moduleId).then((Result)=>{
        setleaderData(Result)
      })
    } catch (error) {
      console.log(error)
    }
  },[])

  const [leaderData, setleaderData] = useState([]);

  return (
    <>
        <LeaderShip sendLeaderData={leaderData[0]}/>
    </>
  )
}

export default index