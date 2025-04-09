import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Form = () => {
    const [users, setUsers] = useState({})
    const formRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getUserData = (e) => {

        setUsers({ ...users, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers({})
        formRef.current.reset()
        dispatch(createUser(users))
        navigate('/read')
    };

    return (
        <> 
            <form
                ref={formRef}

                onSubmit={handleSubmit} className="max-w-md mx-auto  py-2 px-6 bg-white shadow-lg rounded-2xl space-y-2">

                <div >
                    <label className="origin-[0] scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                        Name
                    </label>
                    <input
                        onChange={getUserData}
                        type="text"
                        className="peer block w-full  border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "

                    />

                </div>

                <div >
                    <label className=" top-3 left-0 z-10 origin-[0]  transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                        Email Address
                    </label>
                    <input
                        onChange={getUserData}

                        type="email"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "

                    />

                </div>

                <div >
                    <label className=" origin-[0] scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-blue-600">
                        Password
                    </label>
                    <input
                        onChange={getUserData}

                        type="password"
                        name="password"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "

                    />

                </div>
                <div className="relative">
                    <label className="  origin-[0] scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">
                        Age
                    </label>
                    <input
                        onChange={getUserData}

                        type="number"
                        name="age"
                        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "

                    />

                </div>


                <div className="mb-6">
                    <label className="block mb-2 text-xl font-medium text-gray-700 dark:text-gray-500">
                        Gender
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                onChange={getUserData}

                                type="radio"
                                name="gender"
                                value="Female"

                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <span className="text-xl text-gray-500 ">Female</span>
                        </label>

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={getUserData}
                                className="w-5 h-5 text-pink-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-600 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <span className="text-xl text-gray-500">Male</span>
                        </label>
                    </div>
                </div>


                <button

                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-3 text-xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>

    );
};

export default Form;
