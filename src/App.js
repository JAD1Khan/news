import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Banner from "./components/Home/Banner/Banner";
import Film from "./components/Film/Film";
import SignUp from "./components/Registration/SignUp/SignUp";

import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Motherly from "./components/Motherly/Motherly";
import Baby from "./components/Baby/Baby";
import Login from "./components/Registration/Login/Login";
import ForgetPassword from "./components/Registration/ForgetPassword/ForgetPassword";

export default function MainRouter() {
  const [isloading, setIsloading] = useState(false);
  
  
  useEffect(() => {
    setIsloading(!isloading);
  }, []);
  return (
    <>
      {isloading ? <Navbar /> : <Preloader />}

      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/film" element={<Film />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Motherly" element={<Motherly />} />
        <Route path="/Baby" element={<Baby />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
