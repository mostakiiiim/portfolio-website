import React from 'react';
import emailjs from 'emailjs-com';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';




const Acomplishments = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mi6emqn', 'template_frv5t9i', e.target, 'user_EXdgxhPXgd3S2KDJN72qR')
      .then(res => {
        console.log(res)
        alert("Feedback Submitted")

      })
      .catch(err => console.log(err))
    e.target.reset();
  }

  return (

    <Section className="container border bg-dark fs-1"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundPosition: "center",

      }}>
      <h1 >Contact me</h1>
      <form onSubmit={sendEmail}>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="name" name="name" class="form-control pb-3 pt-3 fs-3" id="exampleFormControlInput1" placeholder="Username" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">Email address</label>
          <input type="email" name="user_email" class="form-control pb-3 pt-3 fs-3" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label ">Message</label>
          <textarea class="form-control fs-3" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>

        </div>
        <input type="submit" value="Send" className="form-control btn btn-primary fs-1 mb-5" />
      </form>

    </Section>

  )
};

export default Acomplishments;
