import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FiMail, FiClock, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const handleQuerySubmit = (data) => {
    console.log("Form Data:", data)
    toast.success('Your message has been sent!');
    reset();
  }

  const onError = (errors) => {
    Object.values(errors).forEach(err => {
      toast.error(err.message);
    });
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-2 sm:px-6 overflow-x-hidden tracking-widest">
      {/* Animated heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-black text-center mb-6 tracking-wider text-black/60 bg-clip-text animate-gradient-x"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Get In Touch
      </motion.h1>
      {/* Info Card */}
      <motion.div
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl px-6 py-8 mb-10 flex flex-col gap-4 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 text-[#FCEF91] text-lg font-semibold">
          <FiClock className="text-2xl" />
          Hours: <span className="text-[#E6521F]">Mon-Sun, 10:00 AM - 6:00 PM</span>
        </div>
        <div className="flex items-center gap-3 text-[#FCEF91] text-lg font-semibold">
          <FiMail className="text-2xl" />
          <span className="text-[#E6521F]">support@layers.shop</span>
        </div>
        <div className="flex items-center gap-3 text-[#FCEF91] text-lg font-semibold">
          <FiPhone className="text-2xl" />
          <span className="text-[#E6521F]">+91 98211 41699 (WhatsApp)</span>
        </div>
      </motion.div>
      {/* Form Card */}
      <motion.form
        onSubmit={handleSubmit(handleQuerySubmit, onError)}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-6 sm:px-10 py-10 flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold text-[#FCEF91] text-center mb-4">We'd love to hear from you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#FCEF91] font-semibold" htmlFor="first_name">First Name</label>
            <input
              {...register("first_name", { required: "Please Enter First Name" })}
              id='first_name'
              className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-[#FCEF91]/20 focus:border-[#E6521F] outline-none transition"
              type="text"
              placeholder='First Name' />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#FCEF91] font-semibold" htmlFor="last_name">Last Name</label>
            <input
              {...register("last_name", { required: "Please Enter Last Name" })}
              id='last_name'
              className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-[#FCEF91]/20 focus:border-[#E6521F] outline-none transition"
              type="text"
              placeholder='Last Name' />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#FCEF91] font-semibold" htmlFor="email">Email</label>
            <input
              {...register("email", { required: "Please Enter Your Email Address" })}
              id='email'
              className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-[#FCEF91]/20 focus:border-[#E6521F] outline-none transition"
              type="email"
              placeholder='Email Address' />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-[#FCEF91] font-semibold" htmlFor="mobile">Mobile Number</label>
            <input
              {...register("mobile", { required: "Please Enter Mobile Number" })}
              id='mobile'
              className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-[#FCEF91]/20 focus:border-[#E6521F] outline-none transition"
              type="text"
              placeholder='Mobile Number' />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg text-[#FCEF91] font-semibold" htmlFor="message">Your Message</label>
          <textarea
            {...register("description")}
            id="message"
            className="rounded-lg px-4 py-2 bg-white/20 text-white placeholder:text-white/60 border border-[#FCEF91]/20 focus:border-[#E6521F] outline-none transition min-h-[120px]"
            placeholder='Enter Your Message'></textarea>
        </div>
        <div className='flex justify-center'>
        <motion.button
          type="submit"
          className="mt-4 w-fit py-1 px-4 bg-gradient-to-r rounded-sm from-[#FCEF91] via-[#E6521F] to-[#FCEF91] text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 tracking-wider"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit
        </motion.button>
        </div>
      </motion.form>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Contact