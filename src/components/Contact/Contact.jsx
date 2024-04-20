import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import arr from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97463f5c-903f-49b6-880d-3d256ab1cdf6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum alias quam ea unde eligendi. Atque iusto vero reprehenderit facere, quisquam a voluptate nesciunt commodi. Similique quam nisi quo error sequi.</p>
            <ul>
                <li><img src={mail} alt="" />Contact@</li>
                <li><img src={phone} alt="" />928383</li>
                <li><img src={loc} alt="" />Lorem ipsum dolor sit <br />Lorem ipsum dolor sit</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className="btn dark-btn">Submit Now <img src={arr} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
