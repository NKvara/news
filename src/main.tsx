import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "@/components/router";
import Navbar from "@/components/navbar";
import {ThemeProvider} from "@material-tailwind/react";
import Footer from "@/components/footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="flex justify-center bg-gray-300 py-16">
        <div className="bg-white w-full max-w-[1520px] rounded-2xl">
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
