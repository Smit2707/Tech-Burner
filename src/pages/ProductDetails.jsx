import React, { useState } from 'react'

const ProductDetails = () => {
    const [selected, setSelected] = useState(0);
    const [size, setSize] = useState("S");

    const productImages = [
        "/images/hoodie-front.jpg",
        "/images/hoodie-back.jpg",
        "/images/hoodie-flat.jpg",
        "/images/hoodie-detail.jpg"
    ];
    return (
        <section className="min-w-full min-h-screen flex items-start bg-transparent px-0 py-14 tracking-wider">
            {/* LEFT: Images */}
            <div className="flex flex-col items-center w-[40%] pl-12 pr-4 select-none">
                {/* Main Image */}
                <div className="bg-neutral-100 rounded-2xl w-full h-[600px] flex items-center justify-center overflow-hidden mb-5">
                    <img
                        src={productImages[selected]}
                        alt="Hoodie Detail"
                        className="object-cover w-full h-full transition-all duration-300"
                    />
                </div>
                {/* Thumbnail Images */}
                <div className="flex gap-4 mt-2">
                    {productImages.map((img, idx) => (
                        <button
                            type="button"
                            key={img}
                            onClick={() => setSelected(idx)}
                            className={`rounded-xl border-[2.5px] transition focus:outline-none overflow-hidden
                ${selected === idx
                                    ? "border-black ring-[2.5px] ring-black"
                                    : "border-transparent opacity-80 hover:border-gray-400"
                                }`}
                            style={{ width: 68, height: 68 }}
                            aria-label={`Hoodie view ${idx + 1}`}
                        >
                            <img src={img} alt={`Hoodie thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* RIGHT: Details */}
            <div className="flex-1 max-w-full px-6 text-[#FCEF91]">
                {/* Title and Price Row */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold leading-snug mb-1">Loose Fit Hoodie</h1>
                        <span className="text-lg font-medium text-neutral-700">$24.99</span>
                    </div>
                    {/* Delivery Countdown */}
                    <div className="bg-neutral-100 rounded-full px-4 py-2 ml-4 flex items-center gap-2 text-xs text-neutral-500 font-medium text-center">
                        <span className="text-black">Order in</span>
                        <span className="font-bold text-red-600">02:30:25</span>
                        <span>to get next day delivery</span>
                    </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center gap-4 mt-6 mb-3">
                    {["S", "M", "L", "XL", "XXL"].map((sz) => (
                        <button
                            key={sz}
                            className={`rounded-full w-12 h-12 text-base font-semibold inline-flex items-center justify-center border transition
                ${size === sz
                                    ? "bg-black text-white border-black"
                                    : "bg-neutral-100 text-black border-transparent hover:border-gray-300"
                                }`}
                            onClick={() => setSize(sz)}
                            type="button"
                        >
                            {sz}
                        </button>
                    ))}
                </div>
                {/* Add To Cart Button */}
                <button className="w-full mt-3 mb-6 rounded-full bg-black text-white text-lg font-semibold px-2 py-3 shadow hover:bg-neutral-900 transition">
                    Add to Cart
                </button>

                {/* Description & Fit */}
                <div className="w-full mb-6">
                    <div className="rounded-xl bg-[#FB9E3A] px-5 py-4">
                        <h2 className="font-semibold text-base mb-2">Description & Fit</h2>
                        <p className="text-neutral-700 text-sm leading-relaxed">
                            Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.
                        </p>
                    </div>
                </div>

                {/* Shipping Details */}
                <div className="bg-[#FB9E3A] rounded-xl px-5 py-4 text-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Discount</span>
                        <span className="text-green-600 font-semibold">Disc 50%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Package</span>
                        <span className="text-neutral-700">Regular Package</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Delivery Time</span>
                        <span>3-4 Working Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Estimation Arrive</span>
                        <span>10-12 October 2024</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails