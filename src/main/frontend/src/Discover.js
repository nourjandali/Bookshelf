import React from "react";
import Book from "./Book";
import Navbar from "./Navbar";

export default function Discover() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Navbar  */}
      <Navbar />

      {/* Header  */}
      <div>
        <h1 className="text-matte font-bold text-2xl text-center mt-10">
          Discover Books
        </h1>
      </div>
      <hr className="border-2 mt-2 w-20 m-auto border-primary" />

      {/* Search  */}
      <div class="flex items-center justify-center mt-16">
        <div class="flex border-2 border-gray-100 rounded">
          <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
          <button class="px-4 text-white text-xs font-bold bg-primary border-l uppercase ease-linear transition-all duration-150 hover:opacity-90">
            Search
          </button>
        </div>
      </div>

      {/* Book */}
      <Book />
    </div>
  );
}
