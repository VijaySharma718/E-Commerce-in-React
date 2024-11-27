import React from 'react' 

const featureditem = () => {
    return (
        <div className='bg-slate-800 pb-10 border-b-2 border-gray-400'>
            <div className='px-5 pt-10 sm:px-10'>
                <p className='text-white font-semibold text-3xl sm:text-4xl'>Featured Item</p>
            </div>

            <div className='grid sm:grid-cols-3 gap-8 px-10 pt-10'>

                <div>
                    <img class="sm:h-[500px] sm:w-[450px] rounded-lg border border-red-600" src="/public/banner/images/f2.jpg" alt="" />
                </div>
                <div>
                    <img class="sm:h-[500px] sm:w-[450px] rounded-lg border border-red-600" src="/public/banner/images/f6.jpg" alt="" />
                </div>
                <div>
                    <img class="sm:h-[500px] sm:w-[450px] rounded-lg border border-red-600" src="/public/banner/images/f5.webp" alt="" />
                </div>
            </div>

            <div className='items-center flex justify-center px-10 py-5 pb-10 sm:pb-0'>
                 <button className='w-full text-white px-6 py-2 bg-red-400 hover:bg-red-500 font-semibold rounded-lg'>
                    Go for Brand &#8594;
                </button>
                 </div>

        </div>
    )
}

export default featureditem
