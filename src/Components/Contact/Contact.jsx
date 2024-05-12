import React from "react";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
    <div className="flex justify-center items-center   h-screen bg-gray-100 ">
      <div className="border border-gray-400  flex flex-row">
      <div className="flex flex-col max-w-lg w-full bg-white  p-8 border ">
        <h1 className="text-blue-800 font-semibold text-4xl mb-8">Contact</h1>
        <form className="border-0">
          <div className="flex">
            <div className="relative flex-1 mr-4 mb-4">
              <input className="border-b border-gray-400 focus:outline-none focus:ring-0 bg-transparent w-full" type="text" placeholder="Your Name" />
            </div>
            <div className="relative flex-1 mb-4">
              <input className="border-b border-gray-400 focus:outline-none focus:ring-0 bg-transparent w-full" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="relative mb-4">
            <input className="border-b border-gray-400 focus:outline-none focus:ring-0 bg-transparent w-full" type="tel" placeholder="Phone" />
          </div>
          <div className="relative mb-4">
            <textarea className="border-b border-gray-400 focus:outline-none focus:ring-0 bg-transparent w-full" placeholder="Type your message here..."></textarea>
          </div>
          <button className="mt-8 bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full mx-auto block">Submit</button>
        </form>
      </div>
      <div className="bg-blue-800 text-white p-4 py-10 border border-gray-400 ">
        <div>
          <p className="mb-4">Opening Hours</p>
          <p>Monday-Friday: 9am to 7pm <br />
            Saturday: 9am to 4pm <br />
            Sunday: Closed</p>
        </div>
        <div>
          <div className="border-t-2 border-white my-4"></div>
          <h3 className="my-5">500 Terry Francine Street, San Francisco, CA 94158 </h3>  
          123-456-7890 <br />
          123-456-7890 <br />
          info@mysite.com 
        </div>
      </div>
      </div>
     
    </div>
    
     </>
    
  );
}
