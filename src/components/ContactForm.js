import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/contactActions';
import '../App.css';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
    
    if (name === 'firstName' || name === 'lastName') {
      newErrors[name] = value.trim() === '' ? 'This field is required.' : '';
    } else if (name === 'mobileNumber') {
      newErrors[name] = !isValidMobileNumber(value) ? 'Please enter a valid number.' : '';
    } else if (name === 'emailAddress') {
      newErrors[name] = !isValidEmailAddress(value) ? 'Please enter a valid email address.' : '';
    }

    setErrors(newErrors);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Dispatch an action to add the contact using Redux
      addContact(formData);

      // Clear the form fields
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
      });

      setErrors({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emailAddress: '',
      });
    }
  };
  const isValidMobileNumber = (value) => {
    // Validation for mobile number
    return /^[0-9]{11}$/.test(value);
  };

  const isValidEmailAddress = (value) => {
    // Validation for email address
    const atIndex = value.indexOf('@');
    const dotIndex = value.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1;
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = { ...errors };

    
    for (const field of ['firstName', 'lastName', 'mobileNumber', 'emailAddress']) {
      if (formData[field].trim() === '') {
        newErrors[field] = 'This field is required.';
        formValid = false;
      }
    }

    if (formData.mobileNumber.trim() !== '' && formData.mobileNumber.length !== 11) {
      newErrors['mobileNumber'] = 'Mobile number must be 11 digits.';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <div className="error">{errors.firstName}</div>
      </div>
      <div>
        <input
          type="text"
          id="middleName"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <div className="error">{errors.lastName}</div>
      </div>
      <div>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
        <div className="error">{errors.mobileNumber}</div>
      </div>
      <div>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={handleInputChange}
        />
        <div className="error">{errors.emailAddress}</div>
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};


const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
