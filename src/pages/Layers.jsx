import React, { useState } from 'react'
import { motion } from "motion/react"

const Layers = () => {
  const colors = [
    { label: "Dark Brilliance", dotColor: "bg-neutral-900 border-neutral-900" },
    { label: "Frost Blaze", dotColor: "bg-neutral-300 border-neutral-300" }
  ];
  const [selected, setSelected] = useState(0);

  const pressLogos = [
    {
      src: "https://www.layers.shop/cdn/shop/files/GQ_Logo.png?v=1745238947", // Use SVG for best clarity
      alt: "GQ Logo",
      width: 60,
      height: 32,
    },
    {
      src: "https://www.layers.shop/cdn/shop/files/Vogue_Logo_1.png?v=1745299382",
      alt: "VOGUE Logo",
      width: 130,
      height: 34,
    },
  ];
  return (
    <div>
      <section className='w-screen h-screen mt-10 -mx-15 px-0 relative flex items-end'>
        <motion.img
          initial={{
            scale: 0.8,
            opacity: 0,
            filter: "blur(10px)"
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "anticipate"
          }}
          className='w-full h-full absolute object-cover' src="https://www.layers.shop/cdn/shop/files/anarc_1.webp?v=1730701300" alt="" />
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
            filter: "blur(10px)"
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "anticipate"
          }}
          viewport={{ once: true, amount: 0.9 }} className='w-[40%] h-54 relative mb-10'>
          <div className='bg-[#3565DB] w-[15%] h-18 absolute left-[6%] top-0'></div>
          <div className='bg-[#3565DB] w-[62%] h-18 absolute left-30 top-18 text-7xl text-center tracking-widest'>Anarc <br />
            <span className='absolute -bottom-15 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 tracking-normal bg-white w-60 text-black text-xl'>
              Powerfull. Accurate. Unique
            </span>
          </div>
          <div className='bg-[#3565DB] w-[15%] h-18 absolute right-[10%] bottom-0'></div>
        </motion.div>
      </section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className=' w-full h-[90vh] mt-10 relative flex justify-between'>
        <div className='h-full w-[40%] flex flex-col justify-center'>
          <h2 className='text-9xl text-[#FCEF91]'>Designed in london. <br />made for india.</h2>
          <p className='text-2xl text-black/40'>Beauty and geometry come together to create Anarc’s unique octagonal dial.
          </p>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <img className='h-[650px] object-cover' src="anarc_bg_remove.png" alt="" />
        </div>
      </motion.section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className=' w-screen -mx-15 px-0 h-[100vh] bg-[#fff] mt-10 relative flex flex-col justify-between'>
        <div className='h-[40%] w-[100%] px-15 flex flex-col justify-center'>
          <h2 className='text-9xl text-[#FB9E3A]'>illuminate every detail.</h2>
          <p className='text-3xl w-[50%] text-black/60'>a 700 nits bright displayand 60hz refresh ratethat shines through even in bright sunlight.
          </p>
        </div>
        <div className='w-[100%] h-[60%] relative flex justify-center items-center'>
          <img className='h-[150%] object-cover absolute bottom-[0%]' src="https://www.layers.shop/cdn/shop/files/15bbeadc3fe958cb7a2eec4172ebaac27e7758fe_2.png?v=1750926551" alt="" />
          <hr className='text-black' />
        </div>
      </motion.section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className=' h-[100vh] bg-black w-screen -mx-15 px-0 relative flex justify-between'>
        <div className='h-full w-[40%] px-15 flex flex-col justify-center'>
          <h2 className='text-9xl text-[#fff]'>Forged in <br />
            stainless steel.</h2>
          <p className='text-2xl text-white/40'>Unmatched design and a functional crown with haptics that keeps up with you.
          </p>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
          <video
            autoPlay
            muted
            loop
            className='h-full w-full rounded-tl-2xl rounded-br-2xl'
            src="https://cdn.shopify.com/videos/c/o/v/448e536db93240bcbd5697edfacdfa6a.webm"></video>
        </div>
      </motion.section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className='bg-[url("/anarth.png")] h-screen w-screen -mx-15 px-0 bg-cover flex items-start'>
        <div className='w-full px-15 mt-40'>
          <h2 className='text-7xl font-semibold text-white/90 tracking-wider '>
            Power through <br />
            7 days of everyday use.
          </h2>
          <p className='text-2xl text-white/50 font-semibold tracking-wider '>
            A 350 mAh battery that lets you chase chaos without running out of power.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }} className='w-screen h-fit bg-white -mx-15 pb-10 px-0'>
        <h2 className='text-center text-black/80 text-7xl pt-10 mb-10'>
          Are you ready to be <br /> an agent of chaos?
        </h2>
        {/* <div className='w-full h-[60%] flex flex-col justify-center items-center gap-5'>
          <img className='w-1/2 h-full object-cover' src="https://www.layers.shop/cdn/shop/files/Group_67_1.png?v=1751622115" alt="" />

          <button className='text-xl bg-[#2762EF] px-4 py-1 rounded-full'>buy now at 6849 rs/-</button>
        </div> */}
        <section className="w-full pt-5 pb-5 flex flex-col items-center">
          {/* Centered Main Watch Image */}
          <div
            className="max-w-md w-full flex items-center justify-center mb-7"
            style={{ minHeight: 300 }}
          >
            <img
              src="https://www.layers.shop/cdn/shop/files/Group_67_1.png?v=1751622115" // Replace with your actual image path
              alt="Layers Smartwatch"
              className="w-full h-auto drop-shadow-2xl select-none"
              draggable={false}
              style={{ maxWidth: 1060 }}
            />
          </div>
          {/* Color selectors under image */}
          <div className="flex flex-row gap-24 mb-7">
            {colors.map((color, idx) => (
              <div
                key={color.label}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelected(idx)}
              >
                <span
                  className={`block w-5 h-5 rounded-full border-2 mb-2 ${color.dotColor} ${selected === idx ? "ring-2 ring-black" : ""}`}
                />
                <span className={`text-sm font-medium ${selected === idx ? "text-black" : "text-gray-500"}`}>
                  {color.label}
                </span>
              </div>
            ))}
          </div>
          {/* Buy CTA */}
          <button className="mt-6 px-10 py-4 rounded-full bg-neutral-900 text-white text-lg font-[200] shadow-md transition hover:bg-neutral-800 tracking-wider">
            Buy Now at ₹ 6849/-
          </button>
        </section>
      </motion.section>

      <motion.section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }} className="w-screen -mx-15 px-0 min-h-screen flex flex-col lg:flex-row items-stretch bg-white tracking-wider">
        {/* Left: Founders Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F4F4F9] relative">
          <div className=" w-full h-full overflow-hidden flex items-end shadow-xl">
            <img
              src="https://www.layers.shop/cdn/shop/files/founders_2.webp?v=1725254683" // Replace with your founders' image path
              alt="Layers Founders"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#2762EF] px-0 lg:px-0">
          <div className="max-w-lg w-full py-20 px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              At Layers, we believe Chaos is a superpower.<br />
              It helps you break out of moulds, do your own thing, find your own place.
            </h2>
            <p className="text-white text-base md:text-lg mb-6 font-medium">
              Without chaos there would be no innovation.<br />
              Without chaos there would be no new ideas of greatness.<br /><br />
              Chaos unsettles those who can’t deal with it.<br />
              We chase it.
            </p>
            <div className="text-white text-base font-extralight tracking-widest">
              Neel &amp; Shlok, Co-founders of Layers
            </div>
          </div>
        </div>
      </motion.section>



      <section
        initial={{
          scale: 0,
          opacity: 0,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)"
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }} className="w-screen -mx-15 px-0 py-20 bg-white">
        <div className="flex flex-col items-center">
          <span className="text-neutral-900 font-semibold text-4xl tracking-wide mb-5">
            Featured In
          </span>
          <div className="flex flex-row gap-7 sm:gap-16 items-center">
            {pressLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                draggable={false}
                style={{ filter: "grayscale(0%)", display: "block" }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layers