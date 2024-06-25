import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ReviewDistributionProgressBar from "./Progress";
import AllReviews from "./AllReviews";
// import { styled } from '@mui/material/styles';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 30,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//   },
// }));

export default function Reviews() {
  return (
    <div>
      <div className="bg-slate-200 p-20">
        <h1 className="text-5xl font-bold ">
          Patient Experiences
        </h1>
        <p className="text-xl pt-6 font-light">Hear directly from our valued patients about their experiences with Dr. XYZ. Discover how our personalized care and expertise have made a positive impact on their health and well-being. Read their stories and see why they trust us with their healthcare needs.</p>
      </div>

     

      <div className="p-20">
        <div className="flex">
          <div className="text-5xl font-bold">4.2</div>
          <div className="mx-3">Out of <br /> 5 Stars</div>  
         
          <div>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </div>
        </div>
        {/* <div className="text-gray-500">Overall rating of 347 1st-party reviews</div> */}


        

        <div className="flex justify-between">
          <div className="py-2">
              <ReviewDistributionProgressBar/>
          </div>

          <div className="flex space-x-4 px-20 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHkToJAUz3fWMwYyddldTebzw3jgydXwHWkA&s"
              alt=""
              className="rounded-full h-24 w-24"
            />
            <span>
              <h1 className="font-extralight">
                <b>Patient Care Coordinator</b> <br /> Stephanie Velasquez{" "}
                <br />
                Direct: <span className="text-cyan-600">347-446-3113</span>
              </h1>
              <a
                href="mailto:stephaniev@momnyc.com"
                className="font-extralight text-cyan-600"
              >
                hello@gmail.com
              </a>
            </span>
          </div>
        </div>

        <hr />

        <AllReviews/>

      </div>
    </div>
  );
}
