import React from 'react'

export default function Loading() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-3'>
        <div className='py-4'>
          <div className='flex items-center animate-pulse'>
            <svg viewBox='0 0 12 10' className='w-3 h-4 text-gray-300 mr-3 fill-current'>
              <g fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-373 -208)'>
                  <g transform='translate(155 191)'>
                    <g transform='translate(218 17)'>
                      <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div className='bg-gray-300 w-full h-5 rounded-full'></div>
          </div>
          <div className='bg-gray-300 h-[1px] my-4' />
          <div className='bg-gray-300 w-[80%] h-3 rounded-full my-6'></div>
          <div className='bg-gray-300 w-[80%] h-3 rounded-full my-6'></div>
          <div className='bg-gray-300 w-[80%] h-3 rounded-full my-6'></div>
          <div className='flex items-center font-bold mt-7'>
            <svg
              enableBackground='new 0 0 15 15'
              viewBox='0 0 15 15'
              x={0}
              y={0}
              className='w-3 h-4 text-gray-300 fill-current mr-3 stroke-current'
            >
              <g>
                <polyline
                  fill='none'
                  points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <div className='bg-gray-300 w-full h-5 rounded-full'></div>
          </div>
          <div className='bg-gray-300 h-[1px] my-4'></div>
          <div className='my-5 animate-pulse'>
            <div className='bg-gray-300 w-[40%] h-4 rounded-full'></div>
            <div className='mt-3'>
              <div className='flex items-center justify-between'>
                <div className='bg-gray-300 h-7 rounded-sm w-12'></div>
                <div className='bg-gray-300 h-7 rounded-sm w-12'></div>
              </div>
              <div className='mt-7 w-full p-2 uppercase bg-gray-300 h-8'></div>
            </div>
          </div>
          <div className='bg-gray-300 h-[1px] my-5'></div>
          <div className='flex gap-1 animate-pulse'>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
          </div>
          <div className='mt-4 flex gap-1 animate-pulse'>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-12 rounded-full bg-gray-300'></div>
          </div>
          <div className='mt-4 flex gap-1 animate-pulse'>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-12 rounded-full bg-gray-300'></div>
          </div>
          <div className='mt-4 flex gap-1 animate-pulse'>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-12 rounded-full bg-gray-300'></div>
          </div>
          <div className='mt-4 flex gap-1 animate-pulse'>
            <div className='h-4 w-4 bg-gray-400'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-4 bg-gray-300'></div>
            <div className='h-4 w-12 rounded-full bg-gray-300'></div>
          </div>
          <div className='bg-gray-300 h-[1px] my-4'></div>
          <div className='w-full p-2 uppercase bg-gray-300 text-white text-sm hover:bg-orange/80 flex justify-center items-center'>
            text
          </div>
        </div>
      </div>
      <div className='col-span-9'>
        <div className='bg-gray-300/40 py-4 px-3 animate-pulse'>
          <div className='flex flex-wrap justify-between gap-2 items-center'>
            <div className='flex flex-wrap items-center gap-2'>
              <div className='bg-gray-300 w-24 h-8'></div>
              <div className='bg-gray-300 w-24 h-8'></div>
              <div className='bg-gray-300 w-24 h-8'></div>
              <div className='bg-gray-300 w-24 h-8'></div>
            </div>
            <div className='flex items-center'>
              <div className='flex gap-1'>
                <div className='bg-gray-300 w-8 h-8 text-white flex items-center justify-center'>{'<'}</div>
                <div className='bg-gray-300 w-8 h-8 text-white flex items-center justify-center'>{'>'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 animate-pulse'>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div key={index} className='bg-white shadow rounded-sm'>
                <div className='flex items-center justify-center bg-gray-300 w-full h-48'>
                  <svg
                    className='w-10 h-10 text-gray-200 dark:text-gray-600'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 18'
                  >
                    <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                  </svg>
                </div>
                <div className='w-full space-y-2.5 animate-pulse max-w-lg my-3 pr-2'>
                  <div className='bg-gray-300 h-2.5 rounded-full w-full'></div>
                  <div className='bg-gray-200 h-2.5 rounded-full w-[80%]'></div>
                  <div className='flex items-center w-full gap-2'>
                    <div className='bg-gray-300 h-2.5 rounded-full w-[30%]'></div>
                    <div className='bg-gray-200 h-2.5 rounded-full w-[30%]'></div>
                  </div>
                  <div className='flex items-center justify-end w-full gap-2'>
                    <div className='bg-gray-300 h-2.5 rounded-full w-[20%]'></div>
                    <div className='bg-gray-200 h-2.5 rounded-full w-[20%]'></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
