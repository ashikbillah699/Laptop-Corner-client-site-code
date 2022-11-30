import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hookes/useTitle';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Order')

    const url = `https://laptop-corner-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data
        }

    })

    const handleDeleteBooking = _id => {
        const agree = window.confirm(`are you sure you want to delete?}`);
        if (agree) {
            fetch(`https://laptop-corner-server.vercel.app/bookings/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('your order deleted successfully')
                    }
                })
        }
    }

    return (
        <div className=''>
            <h1 className='uppercase text-center font-bold text-3xl my-3'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Address</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.title}</td>
                                <td>{booking.resalePrice}</td>
                                <td>{booking.date}</td>
                                <td>{booking.address}</td>
                                <td>{booking.location}</td>
                                <td>{booking.phone}</td>
                                <td><button onClick={() => handleDeleteBooking(booking._id)} className='btn btn-xs border-0 bg-red-500'>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;