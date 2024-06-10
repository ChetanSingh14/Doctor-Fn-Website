import React from 'react'

export default function Appointment() {
  return (
    <div className='flex flex-wrap justify-evenly items-center h-60 bg-gradient-to-r from-oceanblue to-skyblue text-white'>
        <h1 className='text-4xl font-semibold'>Schedule Your Appointment <br />Today</h1>
        <button className='bg-orange-400 p-4 w-80  text-2xl font-extralight'>BOOK AN APPOINTMENT</button>
    </div>
  )
}
