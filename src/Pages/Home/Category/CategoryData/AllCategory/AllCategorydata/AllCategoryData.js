import React from 'react';

const AllCategoryData = ({ product, setLaptop }) => {
    const { img, productname, usetime, ditails, date, rprice, mprice, name, location } = product
    return (
        <div className="hero  bg-base-200 mb-5 text-center rounded-lg">
            <div className="hero-content flex-col lg:flex-row gap-10 ">
                <div className=''>
                    <img alt='' src={img} className="max-w-md rounded-lg shadow-2xl" />
                </div>
                <div className=''>
                    <div className='p-6 my-5 pt-2 rounded-lg border border-slate-400'>
                        <h1 className="text-2xl text-center font-bold">{productname}</h1>
                        <p className=""> <strong>Ditails :</strong> {ditails}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className="font-bold w-1/2 mx-auto">Years of Use : {usetime}</p>
                        <p className="font-bold w-1/2 mx-auto">Years of Use : {date}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className="font-bold w-1/2 mx-auto ">Owner Name : {name}</p>
                        <p className=" font-bold w-1/2 mx-auto">Location : {location}</p>
                    </div >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className=" font-bold w-1/2 mx-auto">Market Price : {mprice}</p>
                        <p className=" font-bold w-1/2 mx-auto">Resal Price :{rprice}</p>
                    </div>
                    <label onClick={() => setLaptop(product)} htmlFor="bookingmodal" className="btn btn-gost text-center">you can booking now</label>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryData;