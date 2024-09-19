import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function isNameDuplicate() {
    const existingNames = contacts.map((contact) => {
      return contact.name ? contact.name.toLowerCase() : "";
    })
    return existingNames.includes(name.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameDuplicate()) {
      alert('Name already taken.');
      return;
    };
    const contact = {
      name: name,
      phoneNumber: phone,
      email: email
    }
    addContact(contact);
    setName("");
    setPhone("");
    setEmail("");
    alert('Contact added');
  };

  // useEffect(() => {
  //   isNameDuplicate()
  // }, []);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
