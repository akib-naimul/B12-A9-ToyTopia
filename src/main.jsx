import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 600, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
