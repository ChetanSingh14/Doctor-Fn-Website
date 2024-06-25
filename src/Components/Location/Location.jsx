import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import Appointment from "../Appointment";

export default function Location() {
  return (
    <>
      <div className="bg-amber-600 text-white">
        <h1 className="text-4xl text-center pt-24 font-semibold">
          Midtown East (51st & 3rd)
        </h1>
        <hr className="border-1 border-gray-800 mt-6 w-3/4 m-auto" />

        <div className="flex flex-wrap gap-y-12 justify-evenly py-12">
          <div className="w-96 h-96 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <LocationOnIcon className="text-6xl" />
            <h1 className="text-3xl">Address</h1>
            <hr className="w-1/4 border-slate-400" />
            <h5>211 E 51st Street</h5>
            <h5>Delhi</h5>
          </div>

          <div className="w-96 h-96 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <AccessTimeIcon className="text-6xl" />
            <h1 className="text-3xl">Office Hours</h1>
            <hr className="w-1/4 border-slate-400" />
            <h5>
              Mon to Wed: 8:00 am to 7:00 pm <br />
              Thurs & Fri: 8:00 am to 6:00 pm
            </h5>
            <h5 className="text-center">
              Open Select Saturdays - Please Contact to Confirm <br />
              Sunday: Closed
            </h5>
          </div>

          <div className="w-96 h-96 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <EmailIcon className="text-6xl" />
            <h1 className="text-3xl">Contact</h1>
            <hr className="w-1/4 border-slate-400" />
            <h5>
              Phone: <span className="text-black">(212) 398-1709</span> <br />{" "}
              Fax: (646) 203-0361 <br /> Text: (646) 429-9147
            </h5>
            <a href="mailto:hello@gmail.com" className="text-black">
              hello@gmail.com
            </a>
          </div>

          <div className="w-96 p-20 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <a href="https://maps.app.goo.gl/Lsa1vKMTgdrDc2hYA" target="_blank"><button className="bg-sky-950 p-4 font-extralight">
              VIEW ON MAPS
            </button></a>
          </div>
          <div className="w-96 p-20 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <a href="tel:1234567890">
            <button className="bg-sky-950 p-4 font-extralight">
              CALL THE OFFICE
            </button></a>
          </div>
          <div className="w-96 p-16 border-2 rounded-xl flex flex-col items-center justify-center gap-6">
            <button className="bg-sky-950 p-4 font-extralight">
              REQUEST AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      <div className="flex m-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold my-6 ">Midtown East</h1>
          <div className="flex space-x-4">
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
          <h3 className="my-4">
            <b>Cross Streets:</b> <br />
            <span className="font-extralight">3rd Avenue and 2nd Avenue</span>
          </h3>
          <h3>
            <b>Closest Subway Stations:</b>
            <br />
            <span className="font-extralight">
              51 St Station: 4 and 6; Lexington Av-53 St: E and M
            </span>
          </h3>
          <h3 className="my-4">
            <b>Parking:</b>
            <br />
            <span className="font-extralight">
              Parking garage near our Midtown East office:
            </span>
          </h3>
          <ul className="list-disc ml-8 my-4 font-extralight">
            <li>
              Discounted Pre-Pay Parking App{" "}
              <span className="text-orange-400">(SpotHero)</span>
            </li>
            <li>
              <span className="text-orange-400">
                MPG: Manhattan Parking (MP53)
              </span>
            </li>
            <li>
              <span className="text-orange-400">Icon Parking on 51st</span>
            </li>
          </ul>
          <h3>
            <b>Handicap Accessibility:</b>
            <br />
            <span className="font-extralight">
              Handicap access is located at 211 East 51st Street (residential
              building)
            </span>
          </h3>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>

      <div className="overflow-hidden py-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510102141!2d76.76357687735525!3d28.64428735819308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1718114595864!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="m-auto lg:w-3/4"></iframe>
      </div>
      <Appointment/>
    </>
  );
}

