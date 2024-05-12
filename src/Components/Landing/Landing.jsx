import React from "react";
import Card from "./Card";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <div className="relative h-5/6  overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/7d7c19_fad9bbe9959a416dbf1742408dc9c4c3~mv2.jpg/v1/fill/w_1497,h_700,al_l,q_85,enc_auto/7d7c19_fad9bbe9959a416dbf1742408dc9c4c3~mv2.jpg"
          alt=""
          className="  w-full  h-full  "
        />

        <div className="absolute h-full inset-0 bg-gray-700 opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-orange-600">
            Tom Dixon MD
          </h1>
          <p className="text-lg font-thin mb-6 text-orange-100">
            Helping to Build a Healthy Community
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-thin py-2 px-4 rounded-full text-lg ">
            BOOK an Appointment
          </button>
        </div>
      </div>

      <div className="lg:flex   py-12  lg:w-screen bg-green-50">
        <div className="lg:w-1/2 my-12 lg:rounded-full flex justify-center items-center ">
          <img
            src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="h-full lg:p-8 lg:rounded-full  sm:w-4/6"
          />
        </div>

        <div className="lg:w-1/2 my-12 flex justify-center items-center py-8">
          <div className="mr-10">
            <div className="text-3xl font-bold mb-6">About Tom Dixon MD</div>
            <div className="font-thin mb-8">
              Our team brings together expertise from various fields to provide
              comprehensive healthcare solutions tailored to the needs of our
              community. With years of experience and a deep understanding of
              healthcare dynamics, we aim to empower individuals to lead
              healthier lives through education, prevention, and personalized
              care.
            </div>

            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              Medical School - University of Dulton Health Science Center.
            </div>
            <div className="mb-8">
              Residency in Family Medicine - University of Dulton Health Science
              Center.
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-lg font-thin">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mt-16 text-cyan-600">
          How Can I Help You
        </h1>
        <div className="flex flex-wrap  justify-center lg:px-24 lg:pt-16">
          <Card
            src="https://static.wixstatic.com/media/84770f_b40688baacb94ae69a406f3e5f723454~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_b40688baacb94ae69a406f3e5f723454~mv2.jpg"
            head="Blood Work"
          />
          <Card
            src="https://static.wixstatic.com/media/84770f_70a89b7a005f4418af69b0c1336e77d2~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_70a89b7a005f4418af69b0c1336e77d2~mv2.jpg"
            head="Physical Exams"
          />
          <Card
            src="https://static.wixstatic.com/media/84770f_2305a8d2dc1a42c9b54b061ef029aeab~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_2305a8d2dc1a42c9b54b061ef029aeab~mv2.jpg"
            head="Mental Health"
          />
        </div>

        <div className="flex flex-wrap  justify-center lg:pb-16">
          <Card
            src="https://static.wixstatic.com/media/84770f_2a3e6d6a95704018aa6a1d4e21622522~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_2a3e6d6a95704018aa6a1d4e21622522~mv2.jpg"
            head="Flu Shot"
          />
          <Card
            src="https://static.wixstatic.com/media/84770f_0508f3ea54a34d95918fbdb8d83ff95a~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_0508f3ea54a34d95918fbdb8d83ff95a~mv2.jpg"
            head="Prevention & Wellness"
          />
          <Card
            src="https://static.wixstatic.com/media/84770f_7ae720c595844d948c52e66456ca014a~mv2.jpg/v1/fill/w_596,h_400,fp_0.50_0.50,q_80,enc_auto/84770f_7ae720c595844d948c52e66456ca014a~mv2.jpg"
            head="Family Planning"
          />
        </div>

        <button className="bg-teal-500 mb-20 m-auto hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-lg font-thin">
          More Services
        </button>
      </div>

      <div className="bg-green-50 flex flex-col  justify-center items-center">
        <h1 className="text-4xl font-semibold my-8 text-cyan-600">
          Insurance Policy
        </h1>
        <h3 className="text-2xl mb-10 font-light">
          Nearly all major insurance plans accepted
        </h3>

        <p className="text-center w-1/2 font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          necessitatibus corporis minima labore et accusamus laudantium
          asperiores nulla? Quae eveniet saepe vitae odio unde totam, nobis
          delectus ipsa provident minus?
        </p>

        <div className="border  w-3/4 border-slate-300 mt-16"></div>

        <div className="lg:flex flex-wrap mb-4">
          <img
            src="https://static.wixstatic.com/media/7d7c19_099671393b7a42b88564e2aee83394a1~mv2.png/v1/fill/w_185,h_45,al_c,lg_1,q_85,enc_auto/7d7c19_099671393b7a42b88564e2aee83394a1~mv2.png"
            alt=""
            className="m-8 h-12"
          />
          <img
            src="https://static.wixstatic.com/media/7d7c19_9e15a7cdeff64e2aa5cc1af2a89c4039~mv2.png/v1/fill/w_90,h_108,al_c,lg_1,q_85,enc_auto/7d7c19_9e15a7cdeff64e2aa5cc1af2a89c4039~mv2.png"
            alt=""
            className="m-8 h-16"
          />
          <img
            src="https://static.wixstatic.com/media/7d7c19_65a7726473214f779625532d8648ad49~mv2.png/v1/fill/w_137,h_111,al_c,lg_1,q_85,enc_auto/7d7c19_65a7726473214f779625532d8648ad49~mv2.png"
            alt=""
            className="m-8 h-16"
          />
          <img
            src="https://static.wixstatic.com/media/7d7c19_a3cd500e388d443b8ba862ec3998088e~mv2.png/v1/fill/w_113,h_101,al_c,lg_1,q_85,enc_auto/7d7c19_a3cd500e388d443b8ba862ec3998088e~mv2.png"
            alt=""
            className="m-8 h-16"
          />
          <img
            src="https://static.wixstatic.com/media/7d7c19_513b7454c06d4c1998e902baa3cb9968~mv2.png/v1/fill/w_98,h_102,al_c,lg_1,q_85,enc_auto/7d7c19_513b7454c06d4c1998e902baa3cb9968~mv2.png"
            alt=""
            className="m-8 h-16"
          />
        </div>

        <button className="bg-teal-500 mb-24 m-auto hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full text-lg font-thin">
          New Patient Form
        </button>
      </div>

      <div class="bg-gray-100 p-6">
        <h1 class="text-4xl text-center text-green-600 font-extralight">
          Taking care of your health
        </h1>
        <div class="flex flex-col md:flex-row justify-center">
          <div class="my-12 flex flex-col items-center p-10 md:w-1/3">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/21/02/00/letter-2160916_1280.png"
              class="rounded-full h-20"
            />
            <h2 class="text-3xl my-6 w-48 text-center text-green-700">
              Health Plans We Accept
            </h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sapiente ipsam qui minus nostrum nulla quo beatae magnam et
              eveniet.
            </p>
            <button class="pt-4 text-violet-800 text-xl font-extralight">
              Read more
            </button>
          </div>

          <div class="my-12 flex flex-col items-center p-10 md:w-1/3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9069/9069049.png"
              class="rounded-full h-20"
            />
            <h2 class="text-3xl my-6 w-54 text-center text-green-700">
              Number 1 Medical Clinic in the Area
            </h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sapiente ipsam qui minus nostrum nulla quo beatae magnam et
              eveniet.
            </p>
            <button class="pt-4 text-violet-800 text-xl font-extralight">
              Read more
            </button>
          </div>

          <div class="my-12 flex flex-col items-center p-10 md:w-1/3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15554/15554266.png"
              class="rounded-full h-20"
            />
            <h2 class="text-3xl my-6 w-48 text-center text-green-700">
              Specialist Doctors
            </h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sapiente ipsam qui minus nostrum nulla quo beatae magnam et
              eveniet.
            </p>
            <button class="pt-4 text-violet-800 text-xl font-extralight">
              Read more
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
