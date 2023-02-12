import { TiLocationOutline } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { getAddress } from '../../../pages/api/';

import React, { useState,useEffect } from 'react'

const ContactIcon = () => {

  useEffect(()=>{
		try {
			getAddress().then((Result)=>{
				setaddress(Result)
			})
		} catch (error) {
			console.log(error)
		}
	},[])

  const [address, setaddress] = useState([]);
 
  const headOfficeAddress = address[0]?.contact_list.map((address,idx)=>{
		return (
      <div className="address d-flex justify-content-between" key={idx}>
        <div className="location px-2">
          <TiLocationOutline size={"30px"} color={"#ffa500"} className="" />
          <span className="ps-2 align-middle footer-font">{address.contact_address}</span>
        </div>
        <div className="phone px-2">
          <FiPhoneCall size={"30px"} color={"#ffa500"} className="pt-2" />
          <span className="ms-2 align-middle footer-font">{address.contact_phone}</span>
        </div>
        <div className="email px-2">
          <AiOutlineMail size={"27px"} color={"#ffa500"} className="pt-0" />
          <span className="ms-2 align-middle footer-font">{address.contact_email}</span>
        </div>
      </div>
		)
})

  return (
    <>
    
        <div className="container text-light py-4">
          {headOfficeAddress}
        </div> 
    </>
  )
}

export default ContactIcon