import React from 'react'

export default function Card({src, head}) {
  return (
    <div className='h-96 w-80 m-4 shadow-xl' >
        <img src={src} alt="" className='h-56 '
        />
        <div className='text-center h-40 bg-red-200 p-6 '>
            <h2 className='text-xl font-light'>{head}</h2>
            <button className="outline outline-orange-500 text-orange-500 hover:opacity-60 font-bold py-1 px-3 rounded-full text-lg font-normal m-10">
              Book Now
            </button>
        </div>
    </div>
  )
}
