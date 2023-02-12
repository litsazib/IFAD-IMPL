import SocialBg from '../../../../styles/SocialResponsibility.module.scss'

import BeatLoader from "react-spinners/BeatLoader";

const Csr = ({sendsocialResData}) => {
  return (
    <>
        <section className={SocialBg.csrbackground}>
          <img src={sendsocialResData?.module_image} alt="" className={SocialBg.bgimg}/>
           <div className={SocialBg.image}>
              <h1 className='text-light display-1 fw-bold text-center align-item-center vertical-align align-middle'>
              {
                sendsocialResData?.module_name?sendsocialResData?.module_name
                :<BeatLoader color="#FA3" />
              }
              </h1>
           </div>
        </section>
    </>
  )
}

export default Csr