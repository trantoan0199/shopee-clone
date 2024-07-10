import React from 'react'

export default function Loading() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 gap-9 animate-pulse'>
            <div className='col-span-5'>
              <div className='flex items-center justify-center bg-gray-200 w-full h-[20rem] border'>
                <svg
                  className='w-10 h-10 text-gray-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 18'
                >
                  <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                </svg>
              </div>
              <div className='mt-4 grid grid-cols-5 gap-1'>
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <div className='flex items-center justify-center bg-slate-200 w-[4rem] h-[4rem]' key={index}>
                      <svg
                        className='w-5 h-5 text-gray-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 18'
                      >
                        <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                      </svg>
                    </div>
                  ))}
              </div>
            </div>
            <div className='col-span-7'>
              <div className='h-6 w-[80%] bg-gray-300 rounded-full'></div>
              <div className='mt-8 flex items-center'>
                <div className='flex items-center'>
                  <div className='flex gap-1 animate-pulse'>
                    <div className='h-4 w-4 bg-gray-400'></div>
                    <div className='h-4 w-4 bg-gray-400'></div>
                    <div className='h-4 w-4 bg-gray-400'></div>
                    <div className='h-4 w-4 bg-gray-400'></div>
                    <div className='h-4 w-4 bg-gray-400'></div>
                  </div>
                </div>
                <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
                <div className='flex'>
                  <div className='w-24 h-4 bg-gray-200 rounded-full'></div>
                  <div className='ml-1 w-24 h-4 bg-gray-300 rounded-full'></div>
                </div>
              </div>
              <div className='mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='rounded-full w-24 h-4 bg-gray-300'></div>
                <div className='ml-3 rounded-full w-24 h-4 bg-gray-300'></div>
              </div>
              <div className='mt-8 flex items-center'>
                <div className='rounded-full w-24 h-4 bg-gray-200'></div>
                <div className='rounded-full w-24 h-4 mx-2 bg-gray-300'></div>
                <div className='rounded-full w-24 h-4 bg-gray-200'></div>
              </div>
              <div className='mt-8 flex items-center'>
                <div className='rounded-full w-24 h-2 mx-2 bg-gray-300'></div>
                <div className='rounded-full w-24 h-2 mx-2 bg-gray-300'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container'>
          <div className='mt-8 bg-white p-4 shadow'>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
          </div>
        </div>
      </div>
    </div>
  )
}
