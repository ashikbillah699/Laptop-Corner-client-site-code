import React from 'react';

const AllCategoryData = ({ product, setLaptop }) => {
    const { img, title, description, location, resalePrice, originalPrice, yearsOfUse, sellerName } = product
    return (
        <div className="hero  bg-base-200 mb-5 text-center rounded-lg">
            <div className="hero-content flex-col lg:flex-row gap-10 ">
                <div className=''>
                    <img alt='' src={img} className="max-w-md rounded-lg shadow-2xl" />
                </div>
                <div className=''>
                    <h1 className="text-5xl text-center font-bold">{title}</h1>
                    <p className="p-6 my-5 pt-2 rounded-lg border border-slate-400	"> <strong>Ditails :</strong> {description}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className="font-bold w-1/2 mx-auto">Years of Use : {yearsOfUse}</p>
                        <p className="font-bold w-1/2 mx-auto">Years of Use : {yearsOfUse}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className="font-bold w-1/2 mx-auto ">Owner Name : {sellerName}</p>
                        <p className=" font-bold w-1/2 mx-auto">Location : {location}</p>
                    </div >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 my-5 rounded-lg border border-slate-400'>
                        <p className=" font-bold w-1/2 mx-auto">Market Price : {originalPrice}</p>
                        <p className=" font-bold w-1/2 mx-auto">Resal Price :{resalePrice}</p>
                    </div>
                    <label onClick={() => setLaptop(product)} htmlFor="bookingmodal" className="btn btn-gost text-center">you can booking now</label>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryData;