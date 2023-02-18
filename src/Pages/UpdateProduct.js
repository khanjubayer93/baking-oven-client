import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const { title, photoURL, description, price,rating,category,_id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data.title)
        fetch(`http://localhost:5000/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
        })

    };
    return (
        <div className='text-center my-10'>
            <h1 className='text-3xl font-bold mb-5'>Update Form</h1>
            <p>Update: {title}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("title")} placeholder={'Title'} defaultValue={title} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("photoURL")} placeholder={'Photo URL'} defaultValue={photoURL} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("price")} placeholder={'Price'} defaultValue={price} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("rating")} placeholder={'Ratin'} defaultValue={rating} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("category")} placeholder={'Category'} defaultValue={category}/>
                <br />
                <textarea className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("description")} placeholder={'Description'} defaultValue={description}/>
                <br />
                <input className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500" type="submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;