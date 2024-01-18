import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route/Route.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="">
      <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>
    </div>
);
