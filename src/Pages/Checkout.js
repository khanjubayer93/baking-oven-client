import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Checkout = () => {
    const { title, _id, price } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        const order = {
            customar: data.name,
            service: _id,
            phone: data.phone,
            price,
            serviceName: title,
            address: data.address,
            message: data.message
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order placed successfully')
                    reset();
                }
            })
    };
    return (
        <div className='text-center my-10'>
            <h1 className='text-3xl font-bold mb-5'>Food name: {title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("name")} placeholder={'Name'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("phone")} placeholder={'Phone'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("address")} placeholder={'Address'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("email")} placeholder={'Email'} defaultValue={user?.email} readOnly />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;