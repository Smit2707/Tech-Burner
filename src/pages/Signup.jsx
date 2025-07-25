import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      f_name: "",
      l_name: "",
      email: "",
      password: "",
      checked: false
    }
  });

  const handleCreateAccount = (data) => {
    data.id = nanoid();
    localStorage.setItem("registerUserData", JSON.stringify(data));
    localStorage.setItem("loginData", JSON.stringify({
      email: data.email,
      password: data.password
    }));
    toast.success("Account created successfully!");
    reset();
    navigate("/login");
  };

  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    if (firstError) {
      toast.error(firstError.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-transparent tracking-widest">
      <div className="flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl bg-white text-[#1a1a2e] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl border border-[#0D75FF]">

        {/* Left Image Section - Hidden on mobile */}
        <div className="hidden md:block md:w-1/2 lg:w-1/2 relative">
          <img
            src="/signup1.jpg"
            alt="signup visual"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 md:p-6">
            <p className="text-sm md:text-lg font-semibold text-white drop-shadow-lg">
              Sign Up. Power Up. Tech Begins Here.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D75FF]">Create an account</h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#0D75FF] underline hover:text-[#02577a]">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit(handleCreateAccount, onError)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  {...register("f_name", { required: "Please enter first name" })}
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF] text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  {...register("l_name", { required: "Please enter last name" })}
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF] text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Please enter email address",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF] text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <input
                {...register("password", { 
                  required: "Please enter password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#e7f0fd] text-[#1a1a2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D75FF] text-sm sm:text-base"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0D75FF]"
                aria-label="Toggle password visibility"
              >
                👁️
              </button>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  {...register("checked", { required: "Please agree to the terms and conditions" })}
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 accent-[#FFA000] rounded focus:ring-[#0D75FF]"
                />
              </div>
              <label htmlFor="terms" className="ml-2 block text-xs sm:text-sm">
                I agree to the{' '}
                <a href="#" className="underline text-[#0D75FF] hover:text-[#02577a]">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent hover:bg-[#0D75FF] text-[#0D75FF] hover:text-white border border-[#0D75FF] transition-all py-2 sm:py-3 rounded-lg font-medium sm:font-semibold shadow hover:shadow-lg text-sm sm:text-base"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <hr className="flex-grow border-gray-300" />
            <span>Or register with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex gap-2 sm:gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-1 sm:gap-2 bg-white text-[#1a1a2e] w-1/2 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
                alt="Google" 
                className="w-4 sm:w-5" 
                loading="lazy"
              />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1 sm:gap-2 bg-white text-[#1a1a2e] w-1/2 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/831/831276.png" 
                alt="Apple" 
                className="w-4 sm:w-5" 
                loading="lazy"
              />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;