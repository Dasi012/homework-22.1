import React from "react";

import { Routes, Route } from "react-router";

import { Calculator } from "../components/Calculator";

import LoginPage from "../Login/Login";

import { HomeLink } from "./Link/HomeLink";

import Todos from "../components/Todos";

const CalculateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomeLink />} />

        <Route path="/todo" element={<Todos/>} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};

export default CalculateRoute;
