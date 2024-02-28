import React from 'react';

const GameTitle = () => {
    return (
        <div className='m-0 w-screen aspect-video pt-[40%] px-12 md:px-24 absolute text-white'>
          <h1 className='text-2xl md:text-6xl font-bold'>The Amateur League Football Tournament</h1>
          <p className='hidden md:inline-block py-6 text-lg w-1/4'>We were the Champions of Both the seasons.</p>
          <div className='my-4 md:m-0'>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    More Info
                </span>
            </button>
          </div>
        </div>
      );
};

export default GameTitle;