import PageContactForm from "../../../components/Layouts/contactform/PageContactForm"
import FormStyle from '../../../styles/ContactForm.module.scss'

const ContactForm = () => {
  return (
    <>
    <section id="contact" className={FormStyle.background}>
        <div className="container">
            <PageContactForm/>
        </div>
    </section>
    </>
  )
}

export default ContactForm