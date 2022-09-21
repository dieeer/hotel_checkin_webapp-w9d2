import { deleteBooking } from "./BookingService"
import './BookingCard.css'

const BookingCard = ({booking, removeBooking}) => {

    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id);
        })
    }
    return (
        
        <><div className='BookingCard'>
            <h1>{booking.name}</h1>
            <p>email: {booking.email}</p>
            <p>checked in?: {booking.checked_in ? '✅' : '❌'}</p>
            <button className='delete' onClick={handleDelete}> 🗑 </button>
            {/* <hr></hr> */}
            </div>
        </>
    )
}

export default BookingCard;