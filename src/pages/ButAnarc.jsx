import React, { useState } from 'react'

const ButAnarc = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const productImages = [
        "/images/anarc-watch-main.jpg", // Use your actual image paths!
        "/images/anarc-watch-side.jpg",
        "/images/anarc-watch-back.jpg",
    ];
    const productColors = [
        { name: "Dark Brilliance", img: "/images/anarc-dark.jpg" },
        { name: "Silver", img: "/images/anarc-silver.jpg" },
        { name: "Gold", img: "/images/anarc-gold.jpg" },
    ];
    return (
        <section className="w-screen h-screen flex bg-[#112240] overflow-hidden">
            {/* LEFT: Image carousel section */}
            <div className="w-[66vw] bg-[#181c2a] flex items-center justify-center relative h-full overflow-x-hidden">
                {/* Carousel Left Control */}
                <button
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-lg p-2 rounded-full z-10"
                    onClick={() => setImgIndex((imgIndex - 1 + productImages.length) % productImages.length)}
                >
                    <svg className="w-6 h-6 text-[#112240]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                {/* Main Image */}
                <img
                    src={productImages[imgIndex]}
                    alt="Anarc Smartwatch"
                    className="max-h-[90vh] w-auto rounded-xl shadow-2xl object-contain"
                    draggable={false}
                />
                {/* Carousel Right Control */}
                <button
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-lg p-2 rounded-full z-10"
                    onClick={() => setImgIndex((imgIndex + 1) % productImages.length)}
                >
                    <svg className="w-6 h-6 text-[#112240]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* RIGHT: Product details, independently scrollable */}
            <aside className="flex-1 bg-[#112240] h-full px-10 py-12 overflow-y-auto">
                {/* Product Title & Desc */}
                <h1 className="text-2xl font-extrabold text-white mb-2">
                    Anarc Smartwatch
                </h1>
                <p className="text-gray-300 mb-5">Made to break moulds.</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-xl mr-2">★★★★☆</span>
                    <span className="text-white font-medium text-sm">685</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-white text-[2rem] font-bold">₹5,999</span>
                    <span className="text-gray-400 line-through text-lg">₹8,999</span>
                </div>
                <div className="text-green-400 text-xs mb-3">
                    MRP inclusive of taxes.<br />
                    Pay in 3 easy EMIs. No Cost EMI available on UPI/Card.
                </div>

                {/* Color Picker */}
                <h3 className="text-white text-sm mt-4 mb-2">Choose your color: <strong className="text-blue-300">{productColors[colorIndex].name}</strong></h3>
                <div className="flex items-center gap-3 mb-5">
                    {productColors.map((clr, idx) => (
                        <button
                            key={clr.name}
                            className={`rounded-full border-2 p-1 bg-white
                ${idx === colorIndex ? 'border-blue-500' : 'border-transparent'} transition`}
                            onClick={() => setColorIndex(idx)}
                        >
                            <img src={clr.img} alt={clr.name} className="w-10 h-10 rounded-full object-cover" />
                        </button>
                    ))}
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-[#2275ea] text-white rounded-lg py-3 font-bold text-base mb-6 shadow-md hover:bg-[#1865c8] transition">
                    Add to Cart
                </button>

                {/* Offer */}
                <div className="flex items-center bg-white/90 border border-gray-200 rounded-lg p-4 mb-8 gap-3">
                    <img
                        src="/images/magnetic-strap.png"
                        alt="Magnetic Strap"
                        className="w-16 h-16 object-contain rounded-lg"
                    />
                    <div>
                        <div className="text-[#112240] font-semibold">Get a Free Magnetic Strap <span className="text-[#2275ea] font-bold">worth ₹799</span></div>
                        <div className="text-gray-500 text-xs">*Free strap needs to be added at the cart</div>
                    </div>
                </div>

                {/* Feature Links */}
                <nav className="flex items-center justify-between text-white/85 mb-4 gap-2 text-xs">
                    <a href="#" className="hover:underline">View Warranty</a>
                    <a href="#" className="hover:underline">7-day replacement</a>
                    <a href="#" className="hover:underline">Free Delivery</a>
                    <a href="#" className="hover:underline">COD available</a>
                </nav>
            </aside>
        </section>
    )
}

export default ButAnarc