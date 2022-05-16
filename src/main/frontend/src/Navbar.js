import React from "react";
import accountAvatar from "./assets/accountAvatar.svg";
import normalCart from "./assets/normalCart.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mt-6 ">
      {/* Logo */}
      <div>
        <h1 className="text-primary font-bold">Bookshelf</h1>
      </div>
      {/* Img  */}
      <div className="flex">
        <div>
          <img
            href="./checkout"
            className="w-6 mr-4 cursor-pointer"
            src={normalCart}
            alt="Account Avatar"
          />
        </div>
        <div>
          <img
            className="w-6 cursor-pointer"
            src={accountAvatar}
            alt="Account Avatar"
          />
        </div>
      </div>
    </div>
  );
}
