import React from "react";
import Navbar from "./Navbar";

export default function Finished() {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />

      <h1 className="text-matte font-bold text-2xl text-center mt-10">
        Finished
      </h1>
      <hr className="border-2 mt-2 w-12 m-auto border-primary" />
    </div>
  );
}
