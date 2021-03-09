import React, { useState } from 'react';
import './ContactSeller.css';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const {
      name, email, offer, message,
    } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      offer: offer.value,
      message: message.value,
    };
    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    const result = await response.json();
    alert(result.status);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Form">
        <h2>Contact Seller!</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Write your name here.."
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Let us know how to contact you back.."
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="offer">Offer: (In $)</label>
          <input
            type="offer"
            id="offer"
            placeholder="What is your offer?"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="Message"
            placeholder="What would you like to ask the Seller.."
            required
          />
        </div>
        <br />
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};
export default ContactForm;
