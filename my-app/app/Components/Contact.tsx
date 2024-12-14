"use client"
import '@fontsource/poppins'; // Correct way to import
import { TiLocation } from 'react-icons/ti';
import { FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <main className='font-poppins ' id="contact">
      
      <div className="relative h-[60vh] sm:h-[50vh] md:h-[45vh] bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">Get In Touch With Us</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email, Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
      </div>

      
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-12">
          
          
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="flex items-start">
              <TiLocation className="text-3xl text-yellow-600 mr-4" />
              <div>
                <h2 className="font-bold text-xl md:text-2xl text-gray-900">Address</h2>
                <p className="font-medium text-lg md:text-xl text-gray-700">236 5th Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-3xl text-yellow-600 mr-4" />
              <div>
                <h2 className="font-bold text-xl md:text-2xl text-gray-900">Phone</h2>
                <p className="font-medium text-lg md:text-xl text-gray-700">Mobile: +(84) 546-6789</p>
                <p className="font-medium text-lg md:text-xl text-gray-700">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <IoTimeSharp className="text-3xl text-yellow-600 mr-4" />
              <div>
                <h2 className="font-bold text-xl md:text-2xl text-gray-900">Working Time</h2>
                <p className="font-medium text-lg md:text-xl text-gray-700">Monday-Friday: 9:00-22:00</p>
                <p className="font-medium text-lg md:text-xl text-gray-700">Saturday-Sunday: 9:00-21:00</p>
              </div>
            </div>
          </div>

          
          <div className="flex-1 w-full max-w-lg space-y-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 rounded bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 rounded bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  rows={2}
                  className="w-full p-4 rounded bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter the Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-4 rounded bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <div className="py-4">
                <button type="submit" className="w-full py-3 bg-yellow-600 text-white font-semibold text-lg rounded shadow-md hover:bg-yellow-700 transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

  
      <div className="h-[25vh] md:h-[20vh] bg-cover bg-center" style={{ backgroundImage: "url('/cool.jpg')" }}></div>
    </main>
  );
}