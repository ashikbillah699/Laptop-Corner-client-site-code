import React from 'react';
import { Link } from 'react-router-dom';

const CategoryData = ({ category }) => {
    const { title, img, description } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to='/categoy/:id' className="btn btn-sm">Category service</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryData;