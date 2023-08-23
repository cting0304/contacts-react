import React from 'react';
import '../App.css';

function ContactForm() {
  return (
    <form>
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          type="text"
          id="middleName"
          name="middleName"
          placeholder="Middle Name"
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Mobile Number"
        />
      </div>
      <div>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          placeholder="Email Address"
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
