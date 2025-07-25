import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "SKY WALKER BLACK OVERSIZED T-SHIRT",
            size: "L",
            price: 1299,
            quantity: 1,
            image: "https://overlaysnow.com/cdn/shop/files/1L9A0988.jpg?v=1733834407&width=800"
        }
    ]);

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
        toast.success("Item removed from cart!");
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 99 : 0;
    const total = subtotal + shipping - discount;

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
        // Add checkout logic here
        toast.success("Order placed successfully!");
        setCartItems([]);
        navigate('/');
    };

    const applyCoupon = () => {
        if (couponCode.toUpperCase() === 'FLAT200' && subtotal >= 1500) {
            setDiscount(200);
            toast.success("Coupon applied successfully!");
        } else {
            toast.error("Invalid coupon code!");
        }
        setCouponCode('');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-[#FCEF91] py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center uppercase tracking-wider">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-12"
                    >
                        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                        <Link
                            to="/shop"
                            className="inline-block bg-[#FB9E3A] text-[#0a0a0a] px-8 py-3 rounded-full font-medium hover:bg-[#FCEF91] transition"
                        >
                            Continue Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-[#1a1a1a] p-4 rounded-xl border border-[#FB9E3A] flex gap-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium mb-1">{item.name}</h3>
                                        <p className="text-sm text-[#FB9E3A] mb-2">Size: {item.size}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-8 h-8 rounded-full border-2 border-[#FB9E3A] text-[#FB9E3A] hover:bg-[#FB9E3A] hover:text-[#0a0a0a]"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-8 h-8 rounded-full border-2 border-[#FB9E3A] text-[#FB9E3A] hover:bg-[#FB9E3A] hover:text-[#0a0a0a]"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="font-medium">₹{item.price * item.quantity}</span>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-[#E6521F] hover:text-[#FB9E3A]"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#1a1a1a] p-6 rounded-xl border border-[#FB9E3A] sticky top-4"
                            >
                                <h2 className="text-xl font-semibold mb-6 uppercase">Order Summary</h2>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>₹{shipping}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-[#E6521F]">
                                            <span>Discount</span>
                                            <span>-₹{discount}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-[#FB9E3A] pt-4">
                                        <div className="flex justify-between font-semibold">
                                            <span>Total</span>
                                            <span>₹{total}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="Enter coupon code"
                                            className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#FB9E3A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB9E3A] placeholder:text-[#FB9E3A]/50"
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            className="px-4 py-2 bg-[#FB9E3A] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#FCEF91]"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCheckout}
                                    className="w-full bg-[#FB9E3A] text-[#0a0a0a] py-3 rounded-full font-semibold hover:bg-[#FCEF91] transition"
                                >
                                    Proceed to Checkout
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;