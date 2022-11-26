import React, { useContext } from 'react';
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


        setLaptop(null)

    }

    return (
        <div>
            <input type="checkbox" id="bookingmodal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlesubmit} className="modal-box relative">
                    <label htmlFor="bookingmodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {user ?
                        <>
                            <h3 className="text-lg font-bold text-center">{title}</h3>
                            <input type="text" placeholder='price' value={`Price : ${resalePrice}`} className="input input-bordered w-full my-2 " name='price' readOnly />
                            <input type="date" className="input input-bordered w-full my-2 " name='date' required />
                            <input type="email" value={user?.email} className="input input-bordered w-full my-2 " name='email' readOnly />
                            <input type="text" placeholder="your name" className="input input-bordered w-full my-2 " name='userName' required />
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