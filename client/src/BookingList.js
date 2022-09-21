import BookingCard from "./BookingCard";
const BookingsList = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) =>{
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking} />
    });
    
    return (
        <>
            {bookingsList}
        </>
    );

}

export default BookingsList;