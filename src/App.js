import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  function addContact(contact) {
    const newContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    }
    setContacts((prev) => [...prev, newContact]);
  }

  function addAppointment(appointment) {
    const newAppointment = {
      name: appointment.name,
      contact: appointment.contact,
      date: appointment.date,
      time: appointment.time
    }
    setAppointments((prev) => [...prev, newAppointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
