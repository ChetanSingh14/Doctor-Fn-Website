import React from 'react';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function Card({rate, username, source, srcImg, date, description}) {
  return (
    <div className='flex gap-24'>

        <div className='pl-6 pt-4'>
            <div className='flex'><h1 className='mx-2'>{rate}</h1>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack></div>
            <img src={srcImg} alt="" className='h-16'/>
          </div>

          <div className='pt-4'>
            <h1 className='text-3xl font-semibold'>{username}</h1>
            <p>Source: <span className='text-amber-600'>{source}</span> | {date}</p>
            <p className='py-4'>{description}</p>
          </div>
    </div>
  )
}
