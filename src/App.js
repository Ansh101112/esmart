import { QRCode } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import QRCodeVerification from "./pages/qrpage";
import { Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/qrpage"
          element={<QRCodeVerification></QRCodeVerification>}
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
};

export default App;
