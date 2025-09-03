import React from 'react'

export default function Card() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Actual Card */}
            <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img
                        className="p-8 h-[200px] w-full object-contain rounded-t-lg"
                        src="https://plus.unsplash.com/premium_photo-1756138487610-f76348465c58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                        alt="product_image1"
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="/">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>

                    {/* ⭐ Rating Stars */}
                    <div className="flex items-center mt-2.5 mb-5">
                        {/* 4 yellow stars + 1 gray star */}
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-4 h-4 text-yellow-300 mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523...Z" />
                            </svg>
                        ))}
                        <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523...Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
                            4.0
                        </span>
                    </div>

                    {/* Price + Add to Cart */}
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a
                            href="/"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
