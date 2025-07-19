import React from 'react'
import SplitText from '../components/SplitText'

const Contact = () => {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className='mt-10 flex flex-col gap-15'>
            <div className='w-full bg-[#e6511f57] py-15 flex justify-center items-center rounded-xl'>
                <SplitText
                    text="Get In Touch"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    // onAnimationComplete={handleAnimationComplete}
                    className="text-7xl font-semibold tracking-wider text-[#FCEF91]"
                />
            </div>
            <div className='w-full text-[#FCEF91] flex flex-col justify-center items-center'>
                <SplitText
                    text="We're here to assist you!"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    // onAnimationComplete={handleAnimationComplete}
                    className="text-5xl font-semibold tracking-wider text-[#FCEF91]"
                />
                <p className='w-full  flex justify-center flex-col items-center leading-1'>
                    <SplitText
                        text=" Hours of Operation: Monday to Sunday of the week, 10:00 AM to 6:00 PM."
                        delay={200}
                        animateBy="words"
                        direction="top"
                        // onAnimationComplete={handleAnimationComplete}
                        className="text-2xl font-thin tracking-wide text-[#EA2F14]"
                    /><br />
                    <SplitText
                        text=" You can write to us at support@layers.shop"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        // onAnimationComplete={handleAnimationComplete}
                        className="text-2xl font-thin tracking-wide text-[#EA2F14]"
                    /><br />
                    <SplitText
                        text=" Contact our Support on WhatsApp- +919821141699"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        // onAnimationComplete={handleAnimationComplete}
                        className="text-2xl font-thin tracking-wide text-[#EA2F14]"
                    /><br />
                </p>
            </div>
            <form className='w-full'>
                <div className='w-[50%] mx-auto'>
                    <h3 className='text-2xl text-center'>Enter your enquiry below and we'll be happy to assist you:</h3>
                    <div className='flex justify-between mt-3'>
                        <div className='flex flex-col gap-1 w-[49%]'>
                            <label className='text-xl' htmlFor="">First Name</label>
                            <input className='border outline-none rounded-lg px-2 py-1 text-lg' type="text" placeholder='Please Enter First Name' />
                        </div>
                        <div className='flex flex-col gap-1 w-[49%]'>
                            <label className='text-xl' htmlFor="">Last Name</label>
                            <input className='border outline-none rounded-lg px-2 py-1 text-lg' type="text" placeholder='Please Enter Last Name' />
                        </div>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex flex-col gap-1 w-[49%]'>
                            <label className='text-xl' htmlFor="">Email</label>
                            <input className='border outline-none rounded-lg px-2 py-1 text-lg' type="email" placeholder='Please Enter First Name' />
                        </div>
                        <div className='flex flex-col gap-1 w-[49%]'>
                            <label className='text-xl' htmlFor="">Mobile Number</label>
                            <input className='border outline-none rounded-lg px-2 py-1 text-lg' type="number" placeholder='Please Enter Last Name' />
                        </div>
                    </div>
                    <div className='w-full mt-3'>
                            <label className='text-xl' htmlFor="">Your Message</label>
                            <textarea className='border outline-none rounded-lg mt-3 px-2 py-1 text-lg w-full' name="" id="" placeholder='Enter Your Message'></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact