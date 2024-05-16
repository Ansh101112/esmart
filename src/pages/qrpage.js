import React from "react";
import Navbar from "../components/Navbar";

function QRCodeVerification() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <section className="text-center py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8 md:order-first text-center justify-center mx-auto">
          <h1 className="text-5xl font-bold text-center">
            QR Code Verification
          </h1>
          <img
            src="https://i.postimg.cc/PJghMmyQ/9427512-4149572-removebg-preview-1-1.jpg"
            alt="Phone with QR codes"
            className="h-[350px] w-[350px] flex justify-center m-2"
            width="300"
            height="300"
            style={{ aspectRatio: "300 / 300", objectFit: "cover" }}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-xl mb-6">
            <b className="font-semibold">
              Scan products easily for instant access to all the info you need.
              From ingredients to eco impact, make informed choices in seconds.
            </b>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Scan Now
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300">
              Browse Image
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QRCodeVerification;
