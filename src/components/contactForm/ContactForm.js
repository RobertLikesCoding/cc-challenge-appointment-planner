import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name here..."onChange={(e) => {setName(e.target.value)}} value={name} />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" onChange={(e) => {setPhone(e.target.value)}} value={phone} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

