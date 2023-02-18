import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signinUser, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const  from = location.state?.from?.pathname || "/";


    const handleOnSubmit = data => {
        signinUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success('User signed id successfully')
                reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
    };
    
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("email", { required: true })} placeholder={'email'} />
                <br />
                <input type={'password'} className='border-b-4 border-gray-300 focus:outline-none mb-3 w-1/3' {...register("password", { required: true })} placeholder={'password'} />
                <br />
                <button className="bg-red-500 text-white py-2 px-6 font-semebold rounded-full hover:text-red-500 hover:font-semibold hover:bg-white border-2 hover:border-red-500">Log In</button>
            </form>
        </div>
    );
};

export default Login;