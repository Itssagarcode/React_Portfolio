import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin,FaWhatsapp } from "react-icons/fa";
const Contact = () => {

  const formRef = useRef();

 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6fb9cca4-9fec-42be-a47c-2d38588512d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
       formRef.current.reset();
    }
  };

  return (
   <section id="Contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact-container">
      <div className="contact-options">
        <article className='contact-option'>
         <MdOutlineEmail className='contact-option-icon'/>
         <h4>Email</h4>
         <h5>sagarmaithil70@gmil.com</h5>
         <a href="mailto:sagarmaithil70@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className='contact-option'>
        <FaLinkedin className='contact-option-icon' />
         <h4>LinkedIn</h4>
         <h5>Bhushan.</h5>
         <a href="https://www.linkedin.com/in/bhushan-42659b265/" target='_blank'>Send a message</a>
        </article>
        <article className='contact-option'>            
        <FaWhatsapp className='contact-option-icon'/>
         <h4>8307522702</h4>
         <h5>sagarmaithil70@gmil.com</h5>
         <a href="https://api.whatsapp.com/send?phone=8307522702" target='_blank'>Send a message</a>
        </article>
            

      </div>
      {/* ----------- */}
      <form onSubmit={onSubmit} ref={formRef}>
        <input type="text"  name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact