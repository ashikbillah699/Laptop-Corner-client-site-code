import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';

const AllCatagoryModal = ({ laptop, setLaptop }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { title, resalePrice } = laptop;

    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.userName.value
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value
        const address = form.address.value;
        const location = form.location.value
        const booking = {
            title,
            resalePrice,
            date,
            userName,
            email,
            phone,
            address,
            location
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setLaptop(null)
                    toast.success('Your Booking confirm')
                }
                // else {
                //     toast.error(data.message)
                // }

            })

    }

    return (
        <div>
            <input type="checkbox" id="bookingmodal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlesubmit} className="modal-box relative">
                    <label htmlFor="bookingmodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {user?.uid ?
                        <>
                            <h3 className="text-lg font-bold text-center">{title}</h3>
                            <input type="number" placeholder='price' value={`Price : ${resalePrice}`} className="input input-bordered w-full my-2 " name='price' readOnly />
                            <input type="date" className="input input-bordered w-full my-2 " name='date' required />
                            <input type="email" value={user?.email} className="input input-bordered w-full my-2 " name='email' readOnly />
                            <input type="text" value={user?.displayName} className="input input-bordered w-full my-2 " name='userName' required readOnly />
                            <input type="text" placeholder="your address" className="input input-bordered w-full my-2 " name='address' required />
                            <input type="number" placeholder="phone" className="input input-bordered w-full my-2 " name='phone' required />
                            <input type="text" placeholder="location" className="input input-bordered w-full my-2 " name='location' required />
                            <div className='text-center'>
                                <input type="submit" className='btn btn-gost btn-sm w-full' value="Booked" />
                            </div>
                        </>
                        :
                        <>
                            please sign-up if you want to booked
                        </>

                    }
                </form>
            </div>
        </div>
    );
};

export default AllCatagoryModal;