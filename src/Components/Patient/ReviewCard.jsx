import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewCard({head, p1, p2, p3, p4}) {
  return (
    <div className=' text-center py-4'>
        <h1 className='text-3xl font-semibold my-4'>{head}</h1>
        <p className='font-semibold my-4'>{p1}</p>
        <p className='font-extralight my-4'>{p2}</p>
        <p className='font-extralight my-4 '>{p3}</p>
        <p className='text-orange-700 text-xl '>{p4}<span><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></span></p>
    </div>
  )
}
