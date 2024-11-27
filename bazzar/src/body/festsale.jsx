import React from 'react'

const festsale = () => {
  return (
    <>
      <div className='bg-white sm:p-5 pb-10 sm:pb-14'>
        <div>
          <p className='text-red-400 font-bold sm:text-4xl text-3xl  p-5'><span className='text-slate-600 sm:text-4xl text-3xl'>Big</span> Deal For You</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 overflow-x-auto">
          <div> 
            <img class="sm:h-[300px] h-[200px] w-[350px] rounded-lg hover:bg-gray-800 border border-red-600" src="/banner/images/p2.webp" alt="" />
            <div className='pt-1'>
              <p className='text-slate-800 sm:text-2xl text-lg font-semibold '>Polor T-Shirts</p>
              <h3 className='text-red-400 sm:text-xl text-lg font-semibold '>70%</h3>
            </div>
          </div>

          <div>
            <img class="sm:h-[300px] h-[200px] w-[350px] rounded-lg hover:bg-gray-800 border border-red-600" src="/banner/images/p3.webp" alt="" />
            <div className='pt-1'>
            <p className='text-slate-800 sm:text-2xl text-lg font-semibold '>Shirts</p>
            <h3 className='text-red-400 sm:text-xl text-lg font-semibold '>80%</h3>
            </div>
          </div>
          <div>
            <img class="sm:h-[300px] h-[200px]  w-[350px] rounded-lg hover:bg-gray-800 border border-red-600" src="/banner/images/p1.jpg" alt="" />
            <div className='pt-1'>
            <p className='text-slate-800 sm:text-2xl text-lg font-semibold '>Casual Shoes</p>
            <h3 className='text-red-400 sm:text-xl text-lg font-semibold '>75%</h3>
            </div>
          </div>
          <div>
            <img class="sm:h-[300px] h-[200px] w-[350px] rounded-lg hover:bg-gray-800 border border-red-600" src="/banner/images/p4.jpg" alt="" />
            <div className='pt-1'>
            <p className='text-slate-800 sm:text-2xl text-lg font-semibold '>Perfumes</p>
            <h3 className='text-red-400 sm:text-xl text-lg font-semibold '>70%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* next container */}
      <div>
        <div className='bg-white sm:px-10 px-5 py-2'>
          <p className='text-3xl font-bold text-red-500 sm:text-4xl'>50% Off <span className='text-slate-600'>Winter Fashion</span></p>
        </div>

        <div id='content' className='bg-white gap-4 flex justify-start px-2 sm:px-7 overflow-x-auto flex-nowrap'>

          <div className=' p-3 h-[230px] w-[250px] rounded  sm:h-[400px] sm:w-[500px] flex-shrink-0'>
            <div class="overflow-hidden rounded">
              <img class="h-[180px] w-full sm:w-full sm:h-[350px] transition duration-300 ease-in-out hover:scale-110" src="/banner/images/winter1.jpg" alt="Prduct" />
            </div>
            <div class="py-1">
              <p class="font-semibold text-red-500 text-center text-sm ">Shop now</p>
            </div>
          </div>

          <div className=' p-3 h-[230px] w-[250px] rounded  sm:h-[400px] sm:w-[500px] flex-shrink-0'>
            <div class="overflow-hidden rounded">
              <img class="h-[180px] w-full sm:w-full sm:h-[350px] transition duration-300 ease-in-out hover:scale-110" src="/banner/images/winter3.webp" alt="Prduct" />
            </div>
            <div class="py-1">
              <p class="font-semibold text-red-500 text-center text-sm ">Shop now</p>
            </div>
          </div>

          <div className=' p-3 h-[230px] w-[250px] rounded  sm:h-[400px] sm:w-[500px] flex-shrink-0'>
            <div class="overflow-hidden rounded">
              <img class="h-[180px] w-full sm:w-full sm:h-[350px] transition duration-300 ease-in-out hover:scale-110" src="/banner/images/winter4.jpg" alt="Prduct" />
            </div>
            <div class="py-1">
              <p class="font-semibold text-red-500 text-center text-sm ">Shop now</p>
            </div>
          </div>

          <div className=' p-3 h-[230px] w-[250px] rounded  sm:h-[400px] sm:w-[500px] flex-shrink-0'>
            <div class="overflow-hidden rounded">
              <img class="h-[180px] w-full sm:w-full sm:h-[350px] transition duration-300 ease-in-out hover:scale-110" src="/banner/images/winter2.jpg" alt="Prduct" />
            </div>
            <div class="py-1">
              <p class="font-semibold text-red-500 text-center text-sm ">Shop now</p>
            </div>
          </div>

          <div className=' p-3 h-[230px] w-[250px] rounded  sm:h-[400px] sm:w-[500px] flex-shrink-0'>
            <div class="overflow-hidden rounded">
              <img class="h-[180px] w-full sm:w-full sm:h-[350px] transition duration-300 ease-in-out hover:scale-110" src="/banner/images/winter5.jpg" alt="Prduct" />
            </div>
            <div class="py-1">
              <p class="font-semibold text-red-500 text-center text-sm ">Shop now</p>
            </div>
          </div>
        </div>
      </div>

      {/* product grid */}

      <div className='bg-slate-800 sm:p-10 pb-5'>
        <div className='px-5 py-5'>
          <h3 className='text-white text-3xl font-semibold sm:text-4xl'>
            <span className='text-red-400 text-3xl font-semibold sm:text-4xl'>Under &#8377;499</span> | Shoes & Sunglasses
          </h3>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 overflow-x-auto">
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Skin Care</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm  font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>

          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Snekers Shoes</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Bags</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Home Decoration</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Smart Watch</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Causual Shoes</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Skin Care</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;299 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>799</span> </h3>
            </div>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg hover:bg-gray-800" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
            <div className='pt-1'>
              <p className='text-white sm:text-2xl text-lg font-semibold '>Paper Bag</p>
              <h3 className='text-white sm:text-xl text-lg font-semibold '>&#8377;199 <span className='text-sm font-normal'>M.R.P: &#8377;</span> <span className='line-through text-sm font-normal'>399</span> </h3>
            </div>
          </div>
        </div>
      </div>

      {/* product detail */}

      <div className='bg-white pb-10 sm:p-10'>
        <div className='p-5'>
          <h3 className='text-gray-800 text-3xl font-bold sm:text-4xl'>
            Trending Smart Watch for you
          </h3>
        </div>

        <div class="grid gap-4 px-5">
          <div className='sm:flex justify-between'>

            <div>
              <img class="sm:h-[400px] max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
            </div>

            <div className='sm:px-10 sm:w-[50%] pt-2'>
              <p className='text-slate-800 sm:text-4xl text-2xl font-semibold'>New smart watch atom81</p>
              <h3 className='text-slate-800 sm:text-3xl text-2xl font-semibold pt-2'>&#8377;3,999 <span className='text-lg font-normal'>M.R.P: &#8377;</span> <span className='line-through text-lg font-normal'>8,999</span> </h3>


              <button className='px-4 py-2 mt-4 bg-red-400 rounded-md text-white font-semibold hover:bg-red-500'>
                Add to Cart
              </button>
              <br />
              <button className='px-4 py-2 mt-3 bg-red-400 rounded-md text-white font-semibold hover:bg-red-500'>
                Buy Now
              </button>



              <div class="flex items-center pt-4">
                <svg class="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-5 h-5 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">4.95</p>
                <p class="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p class="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">5</p>
              </div>

            </div>

          </div>



          <div class="grid grid-cols-5 gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default festsale
