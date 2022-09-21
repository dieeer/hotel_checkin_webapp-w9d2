import {useState} from 'react';
import {postBooking} from './BookingService.js'
import './BookingForm.css'

const BookingForm = ({addBooking}) => {


        // Adds a state to the user s state.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: false,
    })

    // const [checked, setChecked] = useState(false);

    // const handleChange = () => {
    //     setChecked(!checked);
    // };

    // const Checkbox = ({label, value, onChange }) => {
    //     return (
           
    //     )
    // }

        // Changes the form data.
    const onChange = (event) => {
        const target = event.target;
        console.log(target.name)
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // Creates a new formData object with the target name s value.
        const newFormData = {...formData, [target.name]: value}
        setFormData(newFormData);
    }

    // Adds a new booking.
    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })

        // Sets the form data.
        setFormData({
            name: "",
            email: "",
            checked_in: false,
        });
    }
    return (
        <form onSubmit={onSubmit} id='bookings-form'>
            <h2> 🏨 </h2>
            <h3> 🛎️ </h3>
            <div className='formWrap'>
                <input 
                    onChange={onChange}
                    placeholder='name'
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                />
            </div>
            <div className='formWrap'>
                <input 
                    onChange={onChange}
                    placeholder='email'
                    type='text'
                    id='email'
                    name='email'
                    value={formData.email}
                />
            </div>
            <div className='formWrap'>
            <label htmlFor='checked_in'>
                <input 
                    onChange={onChange}
                    checked={formData.checked_in}
                    type='checkbox'
                    name='checked_in'

                />
                    checked in
                </label>
            </div>
            <input type='submit' value='save' id='save'/>
        </form>
    )

};

export default BookingForm;