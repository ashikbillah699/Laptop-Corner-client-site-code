import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const productname = form.productname.value;
        const usetime = form.usetime.value;
        const date = form.date.value;
        const mprice = form.mprice.value;
        const resalePrice = form.rprice.value;
        const img = form.img.value;
        const ditails = form.ditails.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const performance = form.performance.value;
        const service_id = form.service_id.value

        const product = {
            productname,
            usetime,
            date,
            mprice,
            resalePrice,
            img,
            ditails,
            name,
            email,
            location,
            address,
            phone,
            performance,
            service_id
        }
        console.log(product)

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('your product is posted')
                    navigate('/categoy/:id')
                }
            })

    }

    const { data: categoryNames = [] } = useQuery({
        queryKey: ['categoryName'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryName')
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='container mx-auto'>
            <h1 className='uppercase text-center font-bold text-3xl my-3'>Add Product</h1>
            <div className='m-5'>
                <div className='text-1xl mb-2'>
                    <h5 className='font-bold uppercase'>Please Enter Your Laptop Ditals</h5>
                </div>
                <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <input name='productname' type="text" placeholder="CORE i & Gen" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select name='service_id' className="select select-bordered w-full">
                                {
                                    categoryNames.map(name => <option
                                        key={name?._id}
                                        value={name.service_id}
                                    > {name.title}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <input name='usetime' type="text" placeholder="use time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='date' type="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='mprice' type="number" placeholder="Market Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='rprice' type="number" placeholder="Resell Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='img' type="text" placeholder="your photo url" className="input input-bordered pt-2" required />
                        </div>
                        <div className="form-control">
                            <input name='ditails' type="text" placeholder="Your Laptop Details" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='text-1xl mb-2'>
                            <h5 className='font-bold uppercase'>Please Enter Your Information</h5>
                        </div>
                        <div className="card flex-shrink-0 w-full">
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                    <input name='email' type="text" defaultValue={user?.email} className="input input-bordered" readOnly required />
                                </div>
                                <div className="form-control">
                                    <input name='location' type="text" placeholder="your location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='address' type="text" placeholder="your address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='phone' type="text" placeholder="phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='performance' type="text" placeholder="laptop performance" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6 mx-auto">
                                <button className="btn btn-gost">Add Product</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;