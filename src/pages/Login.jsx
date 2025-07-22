import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const registerUserData = JSON.parse(localStorage.getItem("registerUserData"))
    const { email, password } = JSON.parse(localStorage.getItem("loginData"))
    const [isLogin, setIsLogin] = useState(false)
    // console.log(email, password)
    // const { email, password } = userdata;
    // console.log(email, password)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    const handleLogin = (data) => {

        if (data.email == email && data.password == password) {
            console.log("login success")
            toast.success("Login Successfully!");
            setIsLogin(true);
            console.log(isLogin)
            localStorage.setItem("isLogin", setIsLogin(true))
            reset();
            navigate("/");
        }
        else {
            console.log("Invalid Credentials.")
            toast.error("Invalid Credentials !");
        }
    }

    const onError = (errors) => {
        const firstError = Object.values(errors)[0];
        if (firstError) {
            toast.error(firstError.message);
        }
    };
    return (
        <div className="min-h-fit flex items-center justify-center mt-10 bg-transparent px-4 tracking-widest">
            <div className="flex w-full max-w-5xl bg-white text-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl border border-[#0D75FF]">

                {/* Left Image Section */}
                <div className="w-1/2 relative hidden md:block">
                    <img
                        src="/signup1.jpg"
                        alt="login visual"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                        <p className="text-lg font-semibold text-white drop-shadow-lg">Sign Up. Power Up. Tech Begins Here.</p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="w-full flex flex-col justify-center md:w-1/2 p-8 md:p-12 space-y-6">
                    <h2 className="text-3xl font-semibold text-[#0D75FF]">Login</h2>
                    <p className="text-sm text-gray-500">
                        Don't have an account? <Link to="/signup" className="text-[#0D75FF] underline">Sign Up</Link>
                    </p>


                    <input
                        {...register("email", {
                            required: "Please Enter Email Address",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        })}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF]"
                    />

                    <div className="relative">
                        <input
                            {...register("password", { required: "Please Enter Password" })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF]"
                        />
                        <button className="absolute right-3 top-3 text-gray-500 hover:text-[#0D75FF]">
                            👁️
                        </button>
                    </div>

                    <label className="flex items-center text-sm gap-2">
                        <input {...register("checked", { required: "Please Check the terms and conditions" })} type="checkbox" className="accent-[#FFA000]" />
                        <span>
                            I agree to the{' '}
                            <a href="#" className="underline text-[#0D75FF]">Terms & Conditions</a>
                        </span>
                    </label>

                    <button onClick={handleSubmit(handleLogin, onError)} className="w-full bg-[#0D75FF] hover:bg-[#02577a] transition-all text-white py-3 rounded-lg font-semibold shadow hover:shadow-lg">
                        Login
                    </button>

                    <div className="flex items-center justify-between gap-4 text-sm text-gray-400">
                        <hr className="flex-grow border-gray-300" />
                        <span>Or register with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center justify-center gap-2 bg-[#fff] text-[#1a1a2e] w-1/2 py-2 rounded-lg font-medium border border-[#ccc] hover:bg-[#f2f0e9]">
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-5" />
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#fff] text-[#1a1a2e] w-1/2 py-2 rounded-lg font-medium border border-[#ccc] hover:bg-[#f2f0e9]">
                            <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="Apple" className="w-5" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
