import React from "react";
import registerImage from "./assets/register.svg";

export default function Header() {
  return (
    <div>
      {/* Bookshelf */}
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-primary mt-10">Bookshelf</h1>
      </div>

      <div className="flex items-center mt-10 justify-center shadow-xl">
        {/* Image  */}
        <img className="w-96" src={registerImage} alt="Reading in peace" />
        {/* Form  */}
        <section className="py-16 px-24">
          <div>
            {/* Sign In */}
            <h1 className="text-2xl text-matte uppercase font-bold text-left">
              Register
            </h1>

            <hr className="border-2 w-3/12 border-primary" />

            {/* Email */}
            <label
              className="block uppercase text-xs font-bold mb-2 mt-10"
              for="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 text-matte bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Email"
            />

            {/* Password */}
            <label
              className="block uppercase text-xs font-bold mb-2 mt-8"
              for="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              className="border-0 px-3 py-3 text-matte bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Password"
            />

            <label
              className="block uppercase text-xs font-bold mb-2 mt-8"
              for="grid-password"
            >
              Repeat Password
            </label>
            <input
              type="password"
              className="border-0 px-3 py-3 text-matte bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Repeat password"
            />

            {/* Button */}
            <div class="text-center mt-6">
              <button
                class="bg-primary text-white active:bg-primary hover:opacity-90 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
