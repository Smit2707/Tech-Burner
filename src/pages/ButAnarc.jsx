import React, { useState } from 'react'

const COLOR_OPTIONS = [
    {
        name: "Black",
        label: "Dark Brilliance",
        preview: "https://www.layers.shop/cdn/shop/files/Image_4.png?v=1751618050&width=800",
        images: [
            "https://www.layers.shop/cdn/shop/files/Image_4.png?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Image_4.png?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Image_4.png?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-dark-4.webp?v=1751618050&width=713",
        ],
    },
    {
        name: "White",
        label: "Frost Blaze",
        preview: "https://www.layers.shop/cdn/shop/files/Group_2085662909_b686a4f5-e704-4ade-8a42-e7c7085a4f23.png?v=1751618050&width=713",
        images: [
            "https://www.layers.shop/cdn/shop/files/Group_2085662909_b686a4f5-e704-4ade-8a42-e7c7085a4f23.png?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-frost-3.webp?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-frost-2.webp?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-frost-4.webp?v=1751618050&width=713",
        ],
    },
    {
        name: "Green",
        label: "Jade Mirage",
        preview: "https://www.layers.shop/cdn/shop/files/Rectangle_147038_140df2b3-307f-4fa8-8603-e690385f9da3.png?v=1751618050&width=800",
        images: [
            "https://www.layers.shop/cdn/shop/files/Rectangle_147038_140df2b3-307f-4fa8-8603-e690385f9da3.png?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-earthy-2.webp?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-earthy-3.webp?v=1751618050&width=713",
            "https://www.layers.shop/cdn/shop/files/Anarc-earthy-4.webp?v=1751618050&width=713",
        ],
    },
];

const watchfacesRow1 = [
  "https://www.layers.shop/cdn/shop/files/Mask_group_1.png?v=1731434637&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group_88d22872-6800-414a-8da7-fab4b9c64a59.png?v=1731434658&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-12.png?v=1731412857&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-7.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-6.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-9.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-8.png?v=1731412856&width=352",
];

const watchfacesRow2 = [
  "https://www.layers.shop/cdn/shop/files/Mask_group-13.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-5.png?v=1731413063&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-14.png?v=1731412855&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-11.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-10.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-15.png?v=1731412856&width=352",
  "https://www.layers.shop/cdn/shop/files/Mask_group-15.png?v=1731412856&width=352",
];

const ButAnarc = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const [imgIndex, setImgIndex] = useState(0);

    const color = COLOR_OPTIONS[colorIndex];
    const images = color.images;

    // When color changes, reset imgIndex to 0
    const selectColor = (idx) => {
        setColorIndex(idx);
        setImgIndex(0);
    };

    return (
        <section className="w-full h-screen mt-5 flex tracking-widest overflow-x-hidden relative">
            {/* LEFT: Carousel */}
            <div className="w-[66vw]  ">
                <div className='flex items-center justify-center relative h-full overflow-x-hidden'>
                    <button
                        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-lg p-2 rounded-full z-10"
                        onClick={() => setImgIndex((imgIndex - 1 + images.length) % images.length)}
                        aria-label="Previous Image"
                    >
                        <svg className="w-6 h-6 text-[#112240]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <img
                        src={images[imgIndex]}
                        alt={`${color.label} - view ${imgIndex + 1}`}
                        className="max-h-full w-full rounded-xl shadow-2xl object-cover"
                        draggable={false}
                    />
                    <button
                        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-lg p-2 rounded-full z-10"
                        onClick={() => setImgIndex((imgIndex + 1) % images.length)}
                        aria-label="Next Image"
                    >
                        <svg className="w-6 h-6 text-[#112240]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                <div className='flex relative mt-10 items-center justify-center h-1/2 overflow-x-hidden'>
                    <img className='w-full h-full object-cover object-bottom' src="https://www.layers.shop/cdn/shop/files/screenshot-2024-08-28-at-51508-pm-2-673478231b654.webp?v=1731491936&width=1920" alt="" />
                    <div className='absolute flex flex-col h-[80%] justify-between top-[10%] left-[5%]'>
                        <div className='mb-5 flex flex-col gap-2'>
                            <h3 className='text-2xl'>Designed to <br />
                                be different.
                            </h3>
                            <p className='w-[50%] text-sm'>Anarc’s unique octagonal dial is crafted in stainless steel, paired with a liquid silicone strap to bring together style and comfort like never before.</p>
                        </div>
                        <p className='text-black/80 font-[400]'>
                            Designed in London
                            <br />
                            Functional Crown with haptics
                            <br />
                            Forged in Stainless Steel
                        </p>
                    </div>
                </div>
                <section className="w-full text-[#FCEF91] py-20 px-0 flex justify-center">
                    <div className="max-w-6xl w-full flex flex-col items-center">
                        {/* Heading */}
                        <h2 className="text-[2.25rem] md:text-5xl font-extrabold text-white text-center leading-tight mb-5">
                            Unique, dynamic and <br />responsive watchfaces.
                        </h2>
                        {/* Subtitle */}
                        <p className="text-black/60 leading-snug text-lg text-center mb-12 max-w-2xl">
                            Choose from a 100+ static, responsive and dynamic <br className="hidden md:block" />
                            watchfaces that reflect you and move with you.
                        </p>

                        {/* Watchface grids */}
                        <div className="flex flex-col gap-7 w-full">
                            {/* First row */}
                            <div className="flex flex-row gap-5 justify-center">
                                {watchfacesRow1.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-[18%] bg-[#131f31] flex items-center justify-center overflow-hidden shadow-md"
                                        style={{ aspectRatio: "1 / 1" }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Watchface ${idx + 1}`}
                                            className="object-cover w-full h-full"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Second row */}
                            <div className="flex flex-row gap-5 justify-center">
                                {watchfacesRow2.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-[18%] bg-[#131f31] flex items-center justify-center overflow-hidden shadow-md"
                                        style={{ aspectRatio: "1 / 1" }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Watchface ${idx + 9}`}
                                            className="object-cover w-full h-full"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* RIGHT: Product details */}
            <aside className="flex-1 bg-transparent text-[#FCEF91] h-full sticky top-0 px-10 py-12 overflow-y-auto">
                <h1 className="text-5xl font-extrabold mb-2">
                    Anarc Smartwatch
                </h1>
                <p className="text-white/80">Made to break moulds.</p>

                <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-xl mr-2">★★★★☆</span>
                    <span className=" font-medium text-white text-sm">685</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-2">
                    <span className=" text-[2rem] font-bold">₹5,999</span>
                    <span className="text-gray-100 line-through text-lg">₹8,999</span>
                </div>
                <div className="text-white text-sm tracking-wider mb-3">
                    MRP inclusive of taxes.<br />
                    Pay in 3 easy EMIs. No Cost EMI available on UPI/Card.
                </div>

                {/* Color Picker */}
                <h3 className=" text-sm mt-4 mb-2">
                    Choose your color: <strong className="text-gray-100">{color.label}</strong>
                </h3>
                <div className="flex items-center gap-3 mb-5">
                    {COLOR_OPTIONS.map((clr, idx) => (
                        <button
                            key={clr.name}
                            className={`rounded-full border-2 p-1 bg-white
                ${idx === colorIndex ? 'border-blue-500' : 'border-transparent'} transition`}
                            onClick={() => selectColor(idx)}
                            aria-label={clr.name}
                        >
                            <img src={clr.preview} alt={clr.label} className="w-10 h-10 rounded-full object-cover" />
                        </button>
                    ))}
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-[#2275ea] text-white rounded-lg py-3 font-bold text-base mb-6 shadow-md hover:bg-[#1865c8] transition">
                    Add to Cart
                </button>

                {/* Offer */}
                <div className="flex items-center bg-white/90 border border-gray-200 rounded-lg mb-8 gap-3">
                    <img
                        src="https://www.layers.shop/cdn/shop/files/Frame_2085662673.png?v=1748847950"
                        alt="Magnetic Strap"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    {/* <div>
                        <div className="text-[#112240] font-semibold">Get a Free Magnetic Strap <span className="text-[#2275ea] font-bold">worth ₹799</span></div>
                        <div className="text-gray-500 text-xs">*Free strap needs to be added at the cart</div>
                    </div> */}
                </div>

                {/* Feature Links */}
                <nav className="flex items-center justify-between mb-4 gap-2 text-xs">
                    <a href="#" className="hover:underline">View Warranty</a>
                    <a href="#" className="hover:underline">7-day replacement</a>
                    <a href="#" className="hover:underline">Free Delivery</a>
                    <a href="#" className="hover:underline">COD available</a>
                </nav>
            </aside>
        </section>
    );
}

export default ButAnarc;
