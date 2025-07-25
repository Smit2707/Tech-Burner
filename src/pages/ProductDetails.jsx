import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product || {
        name: "SKY WALKER BLACK OVERSIZED T-SHIRT",
        description: "OVERSIZED T-SHIRT IN PREMIUM QUALITY COTTON FABRIC WITH A RELAXED FIT. FEATURES A UNIQUE GRAPHIC PRINT ON THE FRONT AND RIBBED CREW NECK. PERFECT FOR STREETWEAR LOOKS AND EVERYDAY COMFORT.",
        price: "₹1,299",
        oldPrice: "₹1,999",
        color: "BLACK",
        material: "100% COTTON",
        fit: "OVERSIZED",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        images: [
            {
                src: "https://overlaysnow.com/cdn/shop/files/1L9A0988.jpg?v=1733834407&width=800",
                alt: "Front view"
            },
            {
                src: "https://overlaysnow.com/cdn/shop/files/Raven_Oversized_Hoodies_01_82103749-75a7-40ed-bf14-458cda9a27b1.jpg?v=1733229470&width=800",
                alt: "Side view"
            },
            {
                src: "https://overlaysnow.com/cdn/shop/files/Acid_Embossed_Hoodie_01_902fe134-8cdb-4a41-a9de-a45a0301b335.jpg?v=1733228862&width=800",
                alt: "Back view"
            }
        ]
    };

    const [selected, setSelected] = useState(0);
    const [size, setSize] = useState("");
    const [showSizeChart, setShowSizeChart] = useState(false);
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "AROUS",
            rating: 5,
            comment: "REALLY IMPRESSED WITH THE FABRIC QUALITY FEELS PREMIUM AND HAS A NICE WEIGHT TO IT. THE PRINTS ARE UNIQUE AND THE OVERALL DESIGN IS EDGY YET WEARABLE. DEFINITELY WORTH THE PRICE.",
            date: "2 DAYS AGO",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "PRIYA",
            rating: 4,
            comment: "LOVE THE OVERSIZED FIT AND PREMIUM FEEL. THE FABRIC IS SUBSTANTIAL WITHOUT BEING HEAVY. WILL BE BUYING MORE COLORS.",
            date: "1 WEEK AGO",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    ]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(5);
    const [discount, setDiscount] = useState(0);

    const offers = [
        { code: "FLAT200", text: "GET ₹200 OFF ON ORDERS OVER ₹1500" },
        { code: "INSTANT100", text: "GET ₹100 OFF ON FIRST ORDER" },
        { code: "BIGBAG2", text: "EXTRA 10% OFF ON 2 ITEMS" }
    ];

    const SizeChartModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50 p-4">
                <div className="bg-[#0a0a0a] border border-[#FB9E3A] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-[#0a0a0a] p-4 border-b border-[#FB9E3A] flex justify-between items-center">
                        <h3 className="text-xl font-bold text-[#FCEF91]">SIZE GUIDE</h3>
                        <button
                            onClick={onClose}
                            className="text-[#FB9E3A] hover:text-[#FCEF91] focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 text-[#FCEF91]">
                        <div className="flex justify-between mb-4">
                            <h4 className="font-medium">INCHES</h4>
                            <h4 className="font-medium">CM</h4>
                        </div>

                        <h4 className="text-lg font-semibold mb-2">MEASUREMENT IN INCHES</h4>
                        <p className="text-sm text-[#FB9E3A] mb-4">FIT - OVERSIZED</p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-[#FB9E3A]">
                                        <th className="text-left py-2 px-4">SIZE</th>
                                        <th className="py-2 px-4">XS</th>
                                        <th className="py-2 px-4">S</th>
                                        <th className="py-2 px-4">M</th>
                                        <th className="py-2 px-4">L</th>
                                        <th className="py-2 px-4">XL</th>
                                        <th className="py-2 px-4">XXL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#FB9E3A]">
                                        <td className="font-medium py-2 px-4">CHEST</td>
                                        <td className="py-2 px-4 text-center">45 IN</td>
                                        <td className="py-2 px-4 text-center">47 IN</td>
                                        <td className="py-2 px-4 text-center">49 IN</td>
                                        <td className="py-2 px-4 text-center">51 IN</td>
                                        <td className="py-2 px-4 text-center">53 IN</td>
                                        <td className="py-2 px-4 text-center">55 IN</td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium py-2 px-4">LENGTH</td>
                                        <td className="py-2 px-4 text-center">27 IN</td>
                                        <td className="py-2 px-4 text-center">27.5 IN</td>
                                        <td className="py-2 px-4 text-center">28 IN</td>
                                        <td className="py-2 px-4 text-center">28.5 IN</td>
                                        <td className="py-2 px-4 text-center">29 IN</td>
                                        <td className="py-2 px-4 text-center">29.5 IN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-lg font-semibold mb-2">HOW TO MEASURE?</h4>
                        <div className="space-y-3 mb-4">
                            <div>
                                <p className="font-medium">CHEST</p>
                                <p className="text-sm text-[#FB9E3A]">
                                    MEASURE FROM THE STITCHES BELOW THE ARMPITS ON SIDE TO ANOTHER SIDE OF THE GARMENT.
                                </p>
                            </div>
                            <div>
                                <p className="font-medium">LENGTH</p>
                                <p className="text-sm text-[#FB9E3A]">
                                    MEASURE FROM WHERE THE SHOULDER SEAM MEETS THE COLLAR TO THE HEM.
                                </p>
                            </div>
                        </div>

                        <p className="text-xs text-[#FB9E3A]">MEASUREMENTS ARE PRODUCT SPECIFIC.</p>
                    </div>
                </div>
            </div>
        );
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            const review = {
                id: reviews.length + 1,
                name: "YOU",
                rating,
                comment: newReview.toUpperCase(),
                date: "JUST NOW",
                avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`
            };
            setReviews([review, ...reviews]);
            setNewReview("");
            setRating(5);
        }
    };

    const handleAddToCart = () => {
        if (size) {
            // Add to cart logic here
            toast.success(`${product.name} (Size: ${size}) added to cart!`);
            navigate('/cart'); // Optional: navigate to cart page
        }
    };

    useEffect(() => {
        if (product.price && product.oldPrice) {
            const newPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
            const oldPrice = parseFloat(product.oldPrice.replace(/[^0-9.]/g, ''));
            const discountPercent = Math.round((1 - (newPrice / oldPrice)) * 100);
            setDiscount(discountPercent);
        }
    }, [product.price, product.oldPrice]);

    return (
        <div className="w-screen -mx-15 px-0 bg-[#0a0a0a] text-[#FCEF91] min-h-screen">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="fixed top-4 left-4 z-10 bg-[#1a1a1a] p-2 rounded-full hover:bg-[#FB9E3A] transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>

            {/* Product Details Section */}
            <section className="flex flex-col lg:flex-row items-start px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14 tracking-wider gap-8 max-w-7xl mx-auto">
                {/* LEFT: Images */}
                <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center select-none order-2 lg:order-1">
                    {/* Thumbnail Images */}
                    <div className="flex gap-2 sm:gap-3 w-full justify-center mb-4 overflow-x-auto py-2">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setSelected(idx)}
                                className={`flex-shrink-0 rounded-lg border-2 transition focus:outline-none overflow-hidden
                                    ${selected === idx
                                        ? "border-[#FCEF91] ring-2 ring-[#FB9E3A]"
                                        : "border-transparent opacity-80 hover:border-[#E6521F]"
                                    }`}
                                style={{ width: 60, height: 60 }}
                                aria-label={img.alt}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="bg-[#1a1a1a] rounded-xl w-full aspect-square min-h-[650px] flex items-center justify-center overflow-hidden border border-[#FB9E3A]">
                        <img
                            src={product.images[selected].src}
                            alt={product.images[selected].alt}
                            className="object-cover w-full h-full transition-all duration-300"
                        />
                    </div>
                </div>

                {/* RIGHT: Details */}
                <div className="w-full lg:w-[55%] xl:w-[60%] px-0 lg:px-6 order-1 lg:order-2">
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 uppercase">
                        {product.name}
                    </h1>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl sm:text-3xl font-bold text-[#FB9E3A]">
                            {product.price}
                        </span>
                        <span className="text-lg sm:text-xl text-[#E6521F] line-through">
                            {product.oldPrice}
                        </span>
                        <span className="text-sm sm:text-base bg-[#E6521F] text-[#FCEF91] px-2 py-1 rounded">
                            {discount}% OFF
                        </span>
                    </div>

                {/* Size Selector */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg sm:text-xl font-semibold">SIZE</h2>
                        <button
                            onClick={() => setShowSizeChart(true)}
                            className="text-sm sm:text-base text-[#FB9E3A] hover:text-[#FCEF91] underline focus:outline-none"
                        >
                            SIZE CHART
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {product.sizes.map((sz) => (
                            <button
                                key={sz}
                                className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base font-semibold inline-flex items-center justify-center border-2 transition
                                        ${size === sz
                                        ? "bg-[#FB9E3A] text-[#0a0a0a] border-[#FB9E3A]"
                                        : "bg-transparent text-[#FCEF91] border-[#FCEF91] hover:border-[#E6521F]"
                                    }`}
                                onClick={() => setSize(sz)}
                                type="button"
                            >
                                {sz}
                            </button>
                        ))}
                    </div>
                    {!size && (
                        <p className="text-sm text-[#E6521F] mt-2 uppercase">
                            SELECT A SIZE
                        </p>
                    )}
                </div>

                {/* Add To Cart Button */}
                <motion.button
                    whileTap={size ? { scale: 0.95 } : {}}
                    onClick={handleAddToCart}
                    className={`w-full mb-6 rounded-full text-lg font-semibold px-2 py-3 shadow transition uppercase
                            ${size
                            ? "bg-[#FB9E3A] text-[#0a0a0a] hover:bg-[#FCEF91] cursor-pointer"
                            : "bg-[#1a1a1a] text-[#E6521F] cursor-not-allowed"
                        }`}
                    disabled={!size}
                >
                    {size ? "ADD TO CART" : "SELECT SIZE"}
                </motion.button>

                {/* Return Policy */}
                <div className="flex items-center gap-2 mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FB9E3A]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">
                        7 DAYS EASY EXCHANGE & RETURN
                    </span>
                </div>

                {/* Available Offers */}
                <div className="mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 uppercase">
                        AVAILABLE OFFERS
                    </h2>
                    <div className="space-y-3">
                        {offers.map((offer, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="bg-[#E6521F] text-[#FCEF91] text-xs font-bold px-2 py-1 rounded mt-1">
                                    {offer.code}
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base">
                                        {offer.text}
                                    </p>
                                    <button
                                        className="text-xs sm:text-sm text-[#FB9E3A] hover:underline mt-1 uppercase focus:outline-none"
                                        onClick={() => {
                                            navigator.clipboard.writeText(offer.code);
                                            alert(`Coupon code ${offer.code} copied!`);
                                        }}
                                    >
                                        COPY
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 uppercase">
                        PRODUCT DETAILS
                    </h2>
                    <div className="space-y-2">
                        <div className="flex">
                            <span className="w-24 text-[#FB9E3A]">COLOR:</span>
                            <span className="uppercase">{product.color}</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-[#FB9E3A]">MATERIAL:</span>
                            <span className="uppercase">{product.material}</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-[#FB9E3A]">FIT:</span>
                            <span className="uppercase">{product.fit}</span>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <div className="mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 uppercase">
                        ABOUT THE PRODUCT
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed uppercase">
                        {product.description}
                    </p>
                </div>
        </div>

                {/* Size Chart Modal */ }
    <SizeChartModal
        isOpen={showSizeChart}
        onClose={() => setShowSizeChart(false)}
    />
            </section >

    {/* Customer Reviews Section */ }
    <section section className = "px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-14 pt-15 border-t border-[#FB9E3A]" >
        <div className="max-w-7xl mx-auto">
            {/* Testimonials Header */}
            <div className="text-center mb-12">
                <h2 className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#FB9E3A] mb-2">
                    TESTED 6
                </h2>
                <h3 className="text-sm uppercase tracking-widest text-[#FCEF91] mb-4">
                    SELECT THEM REAL USERS
                </h3>

                {/* Stars Separator */}
                <div className="flex justify-center mb-4">
                    {[...Array(6)].map((_, i) => (
                        <svg
                            key={i}
                            className="w-5 h-5 mx-1 text-[#E6521F]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                <motion.p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FCEF91] mb-4 leading-tight uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    SHAKE YOUR TORMENT...
                </motion.p>

                <h4 className="text-xs uppercase tracking-[0.5em] text-[#FB9E3A]">
                    SHAKE USERS
                </h4>
            </div>

            {/* Reviews Content */}
            <h2 className="text-xs font-medium tracking-[0.3em] text-[#FB9E3A] mb-2 text-center">
                REAL STORIES FROM REAL USERS
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#FCEF91] mb-8 text-center uppercase">
                CUSTOMER REVIEWS
            </h3>

            {/* Review Form */}
            <motion.div
                className="mb-10 border border-[#FB9E3A] rounded-xl p-6"
                whileHover={{ y: -2 }}
            >
                <h4 className="text-lg font-medium mb-6 uppercase">
                    SUBMIT REVIEW
                </h4>
                <form onSubmit={handleReviewSubmit}>
                    <div className="flex items-center mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="focus:outline-none"
                                aria-label={`Rate ${star} star`}
                            >
                                <svg
                                    className={`w-6 h-6 ${star <= rating ? 'text-[#FB9E3A]' : 'text-[#1a1a1a]'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="SHARE YOUR THOUGHTS..."
                        className="w-full p-4 bg-[#1a1a1a] border border-[#FB9E3A] rounded-lg mb-6 min-h-[120px] text-sm tracking-wide uppercase placeholder-[#E6521F] focus:outline-none focus:ring-1 focus:ring-[#FB9E3A]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#FB9E3A] text-[#0a0a0a] px-8 py-3 rounded-lg text-sm font-medium tracking-wider hover:bg-[#FCEF91] transition uppercase"
                    >
                        SUBMIT REVIEW
                    </button>
                </form>
            </motion.div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        whileHover={{ y: -4 }}
                        className="bg-[#1a1a1a] border border-[#FB9E3A] p-6 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#0a0a0a] overflow-hidden mr-4 border border-[#FB9E3A]">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h4 className="font-medium uppercase">
                                    {review.name}
                                </h4>
                                <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-[#FB9E3A]' : 'text-[#1a1a1a]'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-xs text-[#FB9E3A] ml-2 uppercase">
                                        {review.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm tracking-wide uppercase text-[#FCEF91] leading-relaxed">
                            {review.comment}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
            </section >
        </div >
    )
}

export default ProductDetails;