import React from 'react';
import Card from '../Landing/Card';
import Appointment from '../Appointment';

export default function Services() {
  return (
    <>
    <h2 className="text-center text-3xl font-semibold mt-8 mb-8">Our Comprehensive Medical Services</h2>
    <p className='text-center text-2xl font-extralight text-gray-500'>We understand the importance of your movement. It could mean reaching a new personal best, or building the strength to support an active future. Through our holistic range of services, we support your unique challenges and opportunities so you can get the most out of life.</p>
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
      <div className="flex flex-wrap  justify-center lg:pb-16">
        <Card
          src="https://static.wixstatic.com/media/84770f_eeb6e322cb1c470e99ad688a5241950e~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_eeb6e322cb1c470e99ad688a5241950e~mv2.jpg"
          head="General Health"
        />
        <Card
          src="https://static.wixstatic.com/media/84770f_6109caab24884df59ba7962a27e09dd4~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_6109caab24884df59ba7962a27e09dd4~mv2.jpg"
          head="Home Visits"
        />
        <Card
          src="https://static.wixstatic.com/media/84770f_21af492ad98d474e9b6bb8bcb472605c~mv2.jpg/v1/fill/w_580,h_388,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_21af492ad98d474e9b6bb8bcb472605c~mv2.jpg"
          head="Pediatric Consultation"
        />
      </div>
      <Appointment/>
      </>
  )
}
