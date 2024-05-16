import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center space-x-6 py-4">
        <Link className="text-lg font-semibold hover:text-green-600" to="/">
          HOME
        </Link>
        <Link
          className="text-lg font-semibold hover:text-green-600"
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="text-lg font-semibold hover:text-green-600"
          to="/user/login"
        >
          LOGIN
        </Link>
        <Link
          className="text-lg font-semibold hover:text-green-600"
          to="/qrpage"
        >
          SCAN QR
        </Link>
        <Link
          className="text-lg font-semibold hover:text-green-600"
          to="/user/notifications"
        >
          GET NOTIFIED
        </Link>
        <Link
          className="text-lg font-semibold hover:text-green-600"
          to="/contact"
        >
          CONTACT
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
