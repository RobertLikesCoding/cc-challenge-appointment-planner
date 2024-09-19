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
        <label for="name">Name</label>
        <input id="name" name="name" placeholder="Enter your name here..." onChange={setName} value={name} />
        <label for="phone">Phone</label>
        <input id="phone" name="phone" placeholder="Enter your phone number" onChange={setPhone} value={phone} type="tel" />
        <label for="email">Email</label>
        <input id="email" name="email" placeholder="Enter your email" onChange={setEmail} value={email} />
        <button type="submit" value="Submit" />
      </form>
    </>
  );
};

