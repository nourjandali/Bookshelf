import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-primary mt-10">Bookshelf</h1>
      </div>
      <section className="bg-gray-100 w-4/12 m-auto justify-center my-10 px-24 py-10 rounded-lg shadow-lg">
        <div>
          {/* Sign In */}
          <h1 className="text-2xl text-matte uppercase font-bold text-center">
            Sign In
          </h1>

          <hr className="border-2 w-3/12 m-auto border-primary" />

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

          {/* Button */}
          <div class="text-center mt-6">
            <Link to="/discover">
              <button
                class="bg-primary text-white active:bg-primary hover:opacity-90 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
              >
                Sign In
              </button>
            </Link>
          </div>

          {/* Create account? */}
          <div className="mt-4">
            <Link to="/register">
              <p className="text-xs font-bold text-center text-matte uppercase hover:opacity-75">
                Don't have an account?
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
