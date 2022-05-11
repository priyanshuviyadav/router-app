import React from "react";
import ReactDOM from "react-dom/client";
import Courses from "./component/Courses";
import Course from "./component/Course";
import Navigation from "./component/Navigation";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="home" element={<App />} />

      <Route path="courses" element={<Courses />}>
        <Route path=":subject" element={<Course />} />
      </Route>
    </Routes>
    <Navigation />
  </BrowserRouter>
);
