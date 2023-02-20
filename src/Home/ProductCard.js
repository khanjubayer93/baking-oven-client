import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { photoURL, title, description, _id, category, price } = product;
    const handleDetailsProduct = (id) => {
        console.log(id);
    }
    return (
        <Link to={`/productDetails/${_id}`} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p><span className='text-gray-400'>{category}</span></p>
                <h2 className="font-extrabold text-2xl text-slate-700">{title}</h2>
                <p className='text-red-500 font-semibold'>${price}</p>
                <p>
                    {description.length > 50 ?
                        <>
                            {description.slice(0, 50) + '...'}<Link to={`/productDetails/${_id}`}>see more</Link>
                        </>
                        :
                        description
                    }
                </p>

                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`}>
                        <button onClick={() => handleDetailsProduct(_id)} className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">See Details</button>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;