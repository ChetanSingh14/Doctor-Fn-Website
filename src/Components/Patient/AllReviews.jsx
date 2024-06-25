import React from 'react'
import Card from './Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function AllReviews() {
  return (
    <div className='py-4'>
        <div className='py-6'>
        <Card rate={5.0} username={"Review from Lokesh"} source={"Google"} srcImg={"https://www.medicalofficesofmanhattan.com/wp-content/uploads/2021/08/google-gmb-source.png"} date={"June 3, 2024"} description={"Was looking for a new doctor and found Dr. Amarnani. It was super easy to set up an appointment, with many dates and times available. When I showed up for my annual physical, the check in process took less than 5 minutes and waited less than 10 minutes to be seen. Both the reception staff and Dr. Amarnani were extremely friendly. Would definitely recommend."}/>
       </div>

       <div className='py-6'>
        <Card rate={5.0} username={"Review from Lokesh"} source={"Google"} srcImg={"https://www.medicalofficesofmanhattan.com/wp-content/uploads/2021/08/google-gmb-source.png"} date={"June 3, 2024"} description={"Was looking for a new doctor and found Dr. Amarnani. It was super easy to set up an appointment, with many dates and times available. When I showed up for my annual physical, the check in process took less than 5 minutes and waited less than 10 minutes to be seen. Both the reception staff and Dr. Amarnani were extremely friendly. Would definitely recommend."}/>
       </div>

       <div className='py-6'>
        <Card rate={5.0} username={"Review from Lokesh"} source={"Google"} srcImg={"https://www.medicalofficesofmanhattan.com/wp-content/uploads/2021/08/google-gmb-source.png"} date={"June 3, 2024"} description={"Was looking for a new doctor and found Dr. Amarnani. It was super easy to set up an appointment, with many dates and times available. When I showed up for my annual physical, the check in process took less than 5 minutes and waited less than 10 minutes to be seen. Both the reception staff and Dr. Amarnani were extremely friendly. Would definitely recommend."}/>
       </div>

       <div className='py-6'>
        <Card rate={5.0} username={"Review from Lokesh"} source={"Google"} srcImg={"https://www.medicalofficesofmanhattan.com/wp-content/uploads/2021/08/google-gmb-source.png"} date={"June 3, 2024"} description={"Was looking for a new doctor and found Dr. Amarnani. It was super easy to set up an appointment, with many dates and times available. When I showed up for my annual physical, the check in process took less than 5 minutes and waited less than 10 minutes to be seen. Both the reception staff and Dr. Amarnani were extremely friendly. Would definitely recommend."}/>
       </div>

      <div className='flex justify-center pt-12 text-white'>
       <button className='bg-amber-500 hover:bg-amber-600 rounded-full text-2xl p-2 px-4'>Read More<KeyboardDoubleArrowDownIcon/></button>
    </div></div>
  )
}
