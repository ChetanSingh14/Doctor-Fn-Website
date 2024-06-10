import React from 'react'

export default function SmallCard({src, lineColor, head, ml, left}) {
  return (
    <>
    <div className='lg:w-1/2 bg-gray-100 mx-5 my-4'>
        <img src={src} alt="" className='w-full'/>
        <hr className={`my-4 w-1/2 mt-8 relative  border-4 " ${lineColor} ${ml} ${left}`}/>
        <h1 className='text-3xl py-2 pb-12 mx-6'>{head}</h1>
    </div>
    </>
  )
}
