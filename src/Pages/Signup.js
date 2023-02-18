import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createUser, user, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                const profile = {
                    displayName: data.firstName,
                    photoURL: data.photoURL
                }
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(err => console.error(err))
                toast.success('User signed id successfully')
                reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    };

    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("firstName")} placeholder={'First name'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("lastName")} placeholder={'Last name'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("text")} placeholder={'Address'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("email", { required: true })} placeholder={'Email'} />
                <br />
                <input type={'password'} className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("password", { required: true })} placeholder={'Password'} />
                <br />
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("photoURL")} placeholder={'Photo URL'} />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;