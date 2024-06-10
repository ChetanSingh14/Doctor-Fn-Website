import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BigCard from "../Blogs/BigCard";
import SmallCard from "./SmallCard";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Appointment from "../Appointment";

export default function Blogs() {
  return (
    <div className="">
      <img
        src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt=""
        className="w-full h-64"
      />
      <div className="m-auto w-4/5">
        <h1 className="text-5xl font-semibold my-4">
          Latest Insights in Healthcare
        </h1>
        <hr className="border-4 my-4 border-green-500 w-1/2" />
        <p className="text-3xl my-4 text-gray-500 font-light">
          ​Our blog is where our team of allied health experts share their
          knowledge to support your health, lifestyle, and movement.
        </p>
        <div className="bg-gray-100 p-6 lg:px-16 w-full relative">
          <SearchIcon className="absolute top-1/2 lg:left-20 left-8 transform -translate-y-1/2 text-gray-900" />
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full h-10 pl-12 pr-4 placeholder:text-slate-500 outline-green-500"
          />
        </div>
        <BigCard src="https://www.lifecare.com.au/wp-content/uploads/2023/05/download-2.jpg" head="Considerations for exercise during pregnancy" descr="Pregnancy is a time of great change within a person’s body, however in
          a healthy, uncomplicated pregnancy, exercise can continue to be safe
          and is generally recommended during most pregnancies."/>
        <div className="mx-6 lg:py-12 lg:flex justify-between">
          <SmallCard
            src="https://www.lifecare.com.au/wp-content/uploads/2023/12/gettyimages-1284970954-170667a.jpg"
            lineColor="border-rose-700"
            head="Urinary incontinence"
            ml="0"
            left="right-10"
          />
          <SmallCard
            src="https://www.lifecare.com.au/wp-content/uploads/2023/07/Role-of-the-physiotherapist-in-pre-natal-care.jpg"
            lineColor="border-yellow-300"
            head="Pelvic floor muscles"
            ml="ml-10"
            left="left-1/2"
          />
          </div>
          <div className="mx-6 lg:flex justify-between lg:py-6">
          <SmallCard
            src="https://www.lifecare.com.au/wp-content/uploads/2023/10/GettyImages-852401728-scaled.jpg"
            lineColor="border-green-500"
            head="Why should I exercise as I get older?"
            ml="0"
            left="right-10"
          />
          <SmallCard
            src="https://www.lifecare.com.au/wp-content/uploads/2023/12/iStock-1143400985.jpg"
            lineColor="border-black"
            head="Why do joints click"
            ml="ml-10"
            left="left-1/2"
          />
        </div>
        <div className="flex justify-center my-16">
        <Stack spacing={2} >
         <Pagination count={10} variant="outlined" color="primary" />
        </Stack>
        </div>
      </div>
      <Appointment/>
    </div>
  );
}
