import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center space-x-6 py-4">
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          HOME
        </a>
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          ABOUT
        </a>
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          LOGIN
        </a>
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          SCAN QR
        </a>
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          GET NOTIFIED
        </a>
        <a className="text-lg font-semibold hover:text-green-600" href="#">
          CONTACT
        </a>
      </nav>
    </>
  );
};

export default Navbar;
