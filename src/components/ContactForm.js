import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/contactActions';

function ContactForm({ addContact }) {
  const [contact, setContact] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    // Clear the form after adding the contact
    setContact({
      firstName: '',
      middleName: '',
      lastName: '',
      mobileNumber: '',
      emailAddress: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
}

const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
