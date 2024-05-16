import { QRCode } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import QRCodeVerification from "./pages/qrpage";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/qrpage"
          element={<QRCodeVerification></QRCodeVerification>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
