import React from 'react'

const footer = () => {
    return (
        <div className='bg-gray-800 hidden sm:block md:block lg:block'>
            <div className='px-14 py-5'>
                <p className='text-white text-3xl'>Let Us Help You</p>
            </div>
            <div className='flex justify-between'>

           
            

            <div className='px-14 pb-10 w-[30%]'>
                <ul className='text-gray-400'>
                    <li className='text-base hover:text-white hover:underline-offset-2 underline'>Your Account</li>
                    <li className='text-base hover:text-white hover:underline-offset-2 underline'>Your Order</li>
                    <li className='text-base hover:text-white hover:underline-offset-2 underline'>Returns & Replacements</li>
                    <li className='text-base hover:text-white hover:underline-offset-2 underline'>Shipping rates & Policies</li>
                    <li className='text-base hover:text-white hover:underline-offset-2 underline'>Help</li>
                </ul>
            </div>
            <div className='px-20'>
                <h2 className='text-red-400 text-5xl font-bold text-center'>Bazzar</h2>
                <p className='text-white text-lg font-semibold'>"Fashion at Your Fingertips"</p>
            </div>
            </div>
        </div>
    )
}

export default footer
