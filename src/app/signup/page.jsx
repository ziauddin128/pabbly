"use client";
import Logo from "../../../public/Logo";
import Link from "next/link";

import React, { useRef, useState } from "react";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import LeftSlide from "./../_components/LeftSlide";

export default function SignUp() {
  // Use two separate states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const countryList = [
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belize", code: "+501", flag: "🇧🇿" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Cocos (Keeling) Islands", code: "+61", flag: "🇨🇨" },
    { name: "Congo, Democratic Republic of the", code: "+243", flag: "🇨🇩" },
    { name: "Central African Republic", code: "+236", flag: "🇨🇫" },
    { name: "Congo, Republic of the", code: "+242", flag: "🇨🇬" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryList[3].code);
  const [mobile, setMobile] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen w-full">
      {/* Left Side */}
      <div className="hidden lg:block  lg:col-span-4">
        <LeftSlide></LeftSlide>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-8">
        <div className="h-full p-3 relative flex flex-col lg:flex-row items-center justify-center">
          {/* Create Account */}
          <div className="static lg:absolute top-6 right-6 flex flex-col lg:flex-row items-center justify-end gap-5">
            <Link href="/" className="lg:hidden">
              <Logo className="w-[150px] h-[42px]" />
            </Link>
            <p className="text-sm text-text1">Already have a Pabbly Account?</p>
            <Link
              href="/"
              className="text-text3 text-sm font-semibold px-3 py-2 rounded-sm border border-text3 hover:bg-bg2 hover:shadow"
            >
              Login
            </Link>
          </div>
          {/* Form */}
          <div className="max-w-[400px] w-full mx-auto bg-white rounded-md shadow-lg p-5">
            <div className="text-center space-y-1">
              <h1 className="text-xl font-bold">Create Pabbly Account</h1>
              <p className="text-sm text-text1">
                Sign up in seconds. No credit card required.
              </p>
            </div>
            <div className="flex justify-center my-3">
              <button className="btn bg-white black border-[#747775] w-full rounded-md hover:shadow-md">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <div className="divider">or</div>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
                <div className="mb-4">
                  <label className="floating-label">
                    <span>First Name</span>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input input-lg text-sm text-text2 placeholder:text-text1 w-full outline-0 shadow-none focus:outline-offset-0 focus:border-0 hover:border-text2"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="floating-label">
                    <span>Last Name</span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input input-lg text-sm text-text2 placeholder:text-text1 w-full outline-0 shadow-none focus:outline-offset-0 focus:border-0 hover:border-text2"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="floating-label">
                  <span>Email Address</span>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="input input-lg text-sm text-text2 placeholder:text-text1 w-full outline-0 shadow-none focus:outline-offset-0 focus:border-0 hover:border-text2"
                  />
                </label>
              </div>
              {/* Phone and country code */}
              <div className="mb-4">
                <label className="block mb-1 font-medium text-sm text-text2">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <select
                    className="select select-bordered w-[80px]"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    {countryList.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="input input-bordered input-lg text-sm text-text2 placeholder:text-text1 w-full"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="floating-label relative">
                  <span>Password</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-lg text-sm text-text2 placeholder:text-text1 w-full outline-0 shadow-none focus:outline-offset-0 focus:border-0 hover:border-text2 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-[10px] -translate-y-1/2 z-10 cursor-pointer text-lg"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </button>
                </label>
              </div>
              <div className="mb-4">
                <label className="floating-label relative">
                  <span>Confirm Password</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="input input-lg text-sm text-text2 placeholder:text-text1 w-full outline-0 shadow-none focus:outline-offset-0 focus:border-0 hover:border-text2 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-[10px] -translate-y-1/2 z-10 cursor-pointer text-lg"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
                  </button>
                </label>
                <p className="text-text1 text-sm mt-1">
                  Use 8 or more characters for password.
                </p>
              </div>
              <button className="btn bg-text3 border-0 text-base font-medium text-white py-6 w-full rounded-md">
                Login
              </button>

              <div className="flex justify-center items-center gap-2 mt-4 text-sm font-medium">
                <p className="text-text1">Already have a Pabbly Account?</p>
                <a href="/password" className="text-text3 hover:underline">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
