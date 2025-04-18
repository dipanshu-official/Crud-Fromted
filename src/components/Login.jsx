import React, { useRef, useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({})
    const loginRef = useRef()

    const getLoginData = (e) => {
        const { name, value, type, checked } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }



    const handleLogin = (e) => {
        e.preventDefault()
        setUser({})
        loginRef.current.reset()



    }

    const handleDemoLogin = () => {
        const demoUser = {
            email: 'demo@example.com',
            password: 'demo1234',
            remember: true,
        };

        setUser(demoUser);

        // Populate form manually
        const form = loginRef.current;
        form.email.value = demoUser.email;
        form.password.value = demoUser.password;
        form.remember.checked = demoUser.remember;

        // Simulate submit
        handleLogin({ preventDefault: () => { } });
    };
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form ref={loginRef}  onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to our platform
                    </h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                        </label>
                        <input
                            onChange={getLoginData}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                        </label>
                        <input
                            onChange={getLoginData}

                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    onChange={getLoginData}

                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 
                focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <div className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                            Forgot Password?
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
          text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                    <div className="flex items-center gap-2">

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                        </div>
                        <div className="text-blue-700 hover:underline dark:text-blue-500">
                            Create account
                        </div>
                    </div>

                </form>
            </div>
        </div>



    )
}

export default Login