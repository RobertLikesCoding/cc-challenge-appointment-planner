import React from "react";

export const ContactPicker = ({contacts, setContact, selectedContact}) => {
  return (
    <>
      <select onChange={setContact} value={selectedContact}>
        {contacts.length === 0 ? (
          <option disabled>--No contacts available--</option>
        ) : (
          <>
            <option value="">--Select a contact--</option>
            {contacts.map((contact, index) => {
              return <option id={index} value={contact.name}>{contact.name}</option>
            })}
          </>
        )}
      </select>
    </>
  );
};
