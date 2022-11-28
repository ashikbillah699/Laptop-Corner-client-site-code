import React from 'react';


const AddProduct = () => {
    const handleAddProduct = event => {

    }

    return (
        <div className='container mx-auto'>
            <h1 className='uppercase text-center font-bold text-3xl my-3'>Add Product</h1>
            <div>
                <div className='text-1xl mb-2'>
                    <h5>Please Enter Your Laptop Ditals</h5>
                </div>
                <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <input name='productname' type="text" placeholder="Laptop v name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select your Category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <input name='uses' type="text" placeholder="use of years" className="input input-bordered" required />
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
                            <input name='photo' type="email" placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='ditails' type="text" placeholder="Your Laptop Details" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='text-1xl mb-2'>
                            <h5>Please Enter Your Information</h5>
                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <input name='name' type="text" placeholder="your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='uses' type="text" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='location' type="text" placeholder="your location" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='address' type="text" placeholder="your address" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6 mx-auto">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;