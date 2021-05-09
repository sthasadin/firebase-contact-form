import React,{ useState } from 'react'
import './Contact.css';
import {db} from '../firebase';

const Contact = () => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [phoneNumber, setPhoneNumber]= useState("");
  const [address, setAddress]= useState("");
  const [message, setMessage]= useState("");

  const handleSubmit =(e) => {
    e.preventDefault(); 

    db.collection('Order Contact').add({
      name:name,
      email:email,
      phoneNumber:phoneNumber,
      address:address,
      message:message,
    })
    .then(() =>{
      alert('Message Has Been Submitted.')
    })
    .catch((error) =>{
      alert(error.message)
    });

    setName('')
    setEmail('')
    setPhoneNumber('')
    setAddress('')
    setMessage('')
  }


  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1>Contact Form</h1>


      <label >Name</label>
      <input type="text" placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      ></input>

      <label >Email</label>
      <input type="text" placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <label >Phone Number</label>
      <input type="text" placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
      ></input>

      <label >Address</label>
      <input type="text" placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
      ></input>


      <label >Message to Us</label>
      <textarea  placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      ></textarea>


      <button type="submit">Submit</button>

    </form>
  )
}

export default Contact
