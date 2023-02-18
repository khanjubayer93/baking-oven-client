import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { title, photoURL, description, category, _id, price } = useLoaderData();
    const handleDetailsProduct = () => {

    }
    const handleReview = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='flex justify-center'>
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p><span className='text-gray-400'>{category}</span></p>
                    <h2 className="font-extrabold text-2xl text-slate-700">{title}</h2>
                    <p className='text-red-500 font-semibold'>${price}</p>
                    <p>{description}</p>

                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}>
                            <button onClick={() => handleDetailsProduct(_id)} className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Buy Now</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button onClick={() => handleDetailsProduct(_id)} className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Update</button>
                        </Link>
                    </div>

                </div>
                <div className='border-t-2 border-red-500'>
                    <form onSubmit={handleSubmit(handleReview)} className='mt-8 ml-10'>
                        <h2 className='text-2xl font-semebold text-slate-700 mb-5'>Add Review</h2>
                        <textarea className="border-2 border-slate-600 rounded-md focus:outline-none p-3 w-1/2 mb-5"{...register('review')} placeholder="type here"></textarea>
                        <br />
                        <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Submit</button>
                    </form>
                </div>
                <div className='mt-8 ml-10'>
                    <h2 className='text-xl mb-2'>All reviews</h2>
                    <div className='border-2 border-slate-600 rounded-md p-5 mb-10 mr-10'>
                        <div className='flex justify-items-center mb-5'>
                            <img className='rounded-full h-12 w-12 mr-3' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc4bnfG3zNmNB6Dk4C3vge8FxKkdFH64E96jiW8FKdS_04gDdF" alt="" />
                            <div className=''>
                                <span className='font-semibold mb-0'>Salah</span>
                                <br />
                                <span className='mt-0'>Egypt</span>
                            </div>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi repellat, corrupti recusandae sed delectus inventore voluptatum, impedit officia ipsam quasi, eveniet assumenda? Provident repudiandae iusto, molestias nemo obcaecati omnis ducimus ratione aspernatur nesciunt blanditiis quisquam tempore a sunt odio distinctio quia quas rem repellendus exercitationem delectus quae! Consectetur, laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;