import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <label htmlFor="contact-select">Choose a contact</label>
        <ContactPicker
          contacts={contacts}
          setContact={(e) => setContact(e.target.value)}
          selectedContact={contact}
        />
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" min={getTodayString()} onChange={(e) => setDate(e.target.value)} value={date}/>
        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="time" onChange={(e) => setTime(e.target.value)} value={time}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
