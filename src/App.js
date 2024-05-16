import React from "react";
import { Route, Routes } from "react-router-dom";
import QRCodeVerification from "./pages/qrpage";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/qrpage"
          element={<QRCodeVerification></QRCodeVerification>}
        ></Route>

        {/* <Route path="/user/login" element={<Login></Login>}></Route> */}
      </Routes>
    </>
  );
};

export default App;
