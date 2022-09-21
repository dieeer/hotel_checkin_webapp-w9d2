import { deleteBooking } from "./BookingService"

const BookingCard = ({booking, removeBooking}) => {

    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }
    return (
        
        <>
            <h1>{booking.name}</h1>
            <p>email: {booking.email}</p>
            <p>checked in: {booking.checked_in ? '✅' : '❌'}</p>
            <button onClick={handleDelete}> 🗑 </button>
            {/* <hr></hr> */}
        </>
    )
}

export default BookingCard;