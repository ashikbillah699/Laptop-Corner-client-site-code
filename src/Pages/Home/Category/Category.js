import React, { useEffect, useState } from 'react';
import CategoryData from './CategoryData/CategoryData';

const Category = () => {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        fetch('categorya.json')
            .then(res => res.json())
            .then(data => {
                setCategorys(data)
            })
    }, [])
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center mb-10'>
                <h3 className='text-3xl text-black font-bold'>All Catagory</h3>
                <p className='text-inherit'>You can buy these laptops at the price you like</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categorys.map(category => <CategoryData
                        key={category._id}
                        category={category}
                    ></CategoryData>)
                }
            </div>

        </div>
    );
};

export default Category;