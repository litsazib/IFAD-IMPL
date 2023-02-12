import PageContactForm  from '../../components/Layouts/contactform/PageContactForm'
import Contactform from '../../styles/ContactForm.module.scss'
// import ContactForm from './../home/contactform.js/ContactForm';

const NewContact = () => {
  return (
    <>
    <section id='banner' className={Contactform.form}>
      <img src="https://i.postimg.cc/q7X7JmSH/words-with-contact-us-business-concept-idea-352439-1237.jpg" 
      alt="" 
      className={Contactform.formImg}/>
    </section>

    <section className={Contactform.contactformBackground}> 
      <PageContactForm/>
    </section>
    </>
  )
}

export default NewContact