import React from 'react';
import { useForm } from 'react-hook-form';

const CreateProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            reset();
        })
    };

    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("title")} placeholder={'Title'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("description")} placeholder={'Description'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("price")} placeholder={'Price'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("rating")} placeholder={'Ratin'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("category")} placeholder={'Category'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("photoURL")} placeholder={'Photo URL'} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default CreateProduct;