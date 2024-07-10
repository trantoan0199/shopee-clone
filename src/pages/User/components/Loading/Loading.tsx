import React from 'react'

export default function Loading() {
  return (
    <div className='my-3 rounded-sm bg-white p-3 shadow'>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div key={index} className='mb-5 grid grid-cols-12 rounded-sm items-center bg-white py-5 px-4first:mt-0'>
            <div className='col-span-6'>
              <div className='flex'>
                <div className='flex'>
                  <div className='h-20 w-20 bg-gray-200 rounded-sm flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-4 h-4 text-gray-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 18'
                    >
                      <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                    </svg>
                  </div>
                  <div className='px-2 pt-1 pb-2'>
                    <div className='w-32 h-2.5 bg-gray-300 rounded-full'></div>
                    <div className='w-28 h-2 bg-gray-200 mt-2 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-6 w-full h-full'>
              <div className='flex flex-row items-start justify-between'>
                <div className='w-[50%] h-2 bg-gray-200 rounded-full'></div>
                <div className='flex flex-col'>
                  <div className='flex-grow w-12 h-2 mb-2 bg-gray-200 rounded-full'></div>
                  <div className='flex-grow w-8 h-2 bg-gray-200 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
