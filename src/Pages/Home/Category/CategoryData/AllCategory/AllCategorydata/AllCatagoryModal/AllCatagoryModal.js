import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../../../../hookes/useTitle';

const AllCatagoryModal = ({ laptop, setLaptop }) => {
    const { user } = useContext(AuthContext)
    useTitle('Booking')
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
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const title = form.title.value;
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

        fetch('https://laptop-corner-server.vercel.app/bookings', {
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
                            {/* <h3 className="text-lg font-bold text-center display-none" name="title">{title}</h3> */}
                            <input type="text" placeholder='title' value={title} className=" input input-bordered w-full my-2  text-lg font-bold" name='title' readOnly />

                            <input type="number" placeholder='price' value={resalePrice} className="input input-bordered w-full my-2 " name='resalePrice' readOnly />
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