import { useState, useEffect } from "react";
import './App.css';

import BookingForm from "./BookingForm";
import {getBookings} from './BookingService';
import BookingList from './BookingList'
import BookingCard from "./BookingCard";

// Creates a new app.
function App() {

  const [hotelBookings, setHotelBookings] = useState([]);

    // Sets the hotel bookings.
  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setHotelBookings(allBookings);
    })
  }, []);

  // Add a booking to the hotel.
  const addBooking = (booking) =>{
    const temp = hotelBookings.map(s => s);
    temp.push(booking);
    setHotelBookings(temp);
  }

  // Delete the hotel booking.
  const removeBooking = (id) => {
    const temp = hotelBookings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);
  

    temp.splice(indexToDel, 1);
    setHotelBookings(temp);
  }

  return (
    <>
      <BookingForm addBooking={addBooking}/>
      <BookingList bookings = {hotelBookings} removeBooking={removeBooking}/>
    </>
  );
};

export default App;