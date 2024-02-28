import React from 'react'

const Footer = () => {
  return (


<footer className="shadow-lg bg-gray-700 justify-between flex bg-opacity-80 bg-gradient-to-t from-red-600">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.oracle.com/in/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://i0.wp.com/centralfloridasoccer.com/wp-content/uploads/2017/05/Oracle-FC-Soccer_Design-01.png?w=492&ssl=1" class="h-8" alt="oracle Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Oracle FC</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/fixtures" className="hover:underline me-4 md:me-6">Fixtures</a>
                </li>
                <li>
                    <a href="/tournaments" className="hover:underline">Tournaments</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://oracle.com/" class="hover:underline">OracleFC™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer