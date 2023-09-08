import React from 'react'

export default function Tooltip({ children }) {
    return (
        <div className='absolute inset-y-0 left-12 hidden items-center group-hover:flex z-auto'>
            <div className='relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold drop-shadow-lg text-gray-900'>
                <div className='absolute inset-y-0 -left-1 flex items-center'>
                    <div className='h-2 w-2 rotate-45 bg-white'>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}