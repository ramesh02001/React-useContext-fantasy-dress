import React from 'react'
// import './Contact.css'
import './All.css'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9af692dc-ca0f-42c9-90da-42b42fc25673");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log("Success",data);
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
        <div className='contact'>
        
        <div className='contact-col'>
          <h3>Send us a message <img src='data:image/png;base64,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' alt=''/></h3>
          <p>Desh Bhagat University in Punjab was Established as Desh Bhagat Group of Institutes. The institution received University status in 1996. It Situated in Punjab's Fatehgarh Sahib District, Desh Bhagat University is a state-private university established under Punjab Government Desh Bhagat University Act, 2012.</p>
          <ul>
              <li><img src='data:image/png;base64,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' alt=''/>Contact@Greatedu.com</li>
              <li><img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_W3mWC2gF9eSB0-tLYX-U97qL0dA0frYdZHcghT-DB1Jr1Z17U5-nK-nVsbkE64g-DxY&usqp=CAU'/>+91 10008 10008</li>
              <li><img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcApUgS13aJSrvX6D8h57dxC9SDaGs3mGJ3w&usqp=CAU'/>its   a public state university located in Chennai, Tamil Nadu, India.</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
              <label>Your name</label>
              <input type='text' name='name' placeholder='Enter Your Name' required/>
              <label>Phone Number </label>
              <input type='text' name='phone'  placeholder='Enter Your mobile number' required/>
              <label>Write your message here</label>
              <textarea name='message' rows='6' placeholder='Enter your message' required/>
              <button type='submit' className='btn dark-btn'>Submit Now<i class="fa-solid fa-arrow-right"></i></button>
              <span>{result}</span>
          </form>
        </div>
        
  </div>
    </>
  )
}

export default Contact