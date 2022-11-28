import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import AllCatagoryModal from './AllCategorydata/AllCatagoryModal/AllCatagoryModal';
import AllCategoryData from './AllCategorydata/AllCategoryData';

const Allcategory = () => {
    // const productss = useLoaderData()
    const [laptop, setLaptop] = useState(null)

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/product', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch {

            }
        }

    })

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold uppercase my-5'>You can mark your choice</h1>
            </div>
            <div className='container mx-auto'>
                {
                    products.map((product, i) => <AllCategoryData
                        key={i}
                        product={product}
                        setLaptop={setLaptop}
                    ></AllCategoryData>)
                }
            </div>
            {
                laptop &&
                <AllCatagoryModal
                    setLaptop={setLaptop}
                    laptop={laptop}
                ></AllCatagoryModal>
            }
        </div>
    );
};

export default Allcategory;