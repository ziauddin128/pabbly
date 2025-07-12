"use client";
import Logo from "../../../public/Logo";
import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";

import { LuEye, LuEyeClosed, LuChevronDown, LuSearch } from "react-icons/lu";
import LeftSlide from "./../_components/LeftSlide";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const recaptchaRef = useRef(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Country Code Api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd")
      .then((res) => res.json())
      .then((data) => {
        setCountryList(data);
        // Set default to India
        const india = data.find((country) => country.name.common === "India");
        if (india) {
          setSelectedCountry({
            code: india.idd.root + india.idd.suffixes[0],
            flag: india.flags.png,
          });
        }
      });
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry({
      code: country.idd.root + country.idd.suffixes[0],
      flag: country.flags.png,
    });
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  // Filter countries based on search query
  const filteredCountries = countryList.filter((country) => {
    const query = searchQuery.toLowerCase();
    const countryName = country.name.common.toLowerCase();
    const countryCode = (
      country.idd.root + (country.idd.suffixes?.[0] || "")
    ).toLowerCase();

    return countryName.includes(query) || countryCode.includes(query);
  });

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
                <div className="flex gap-0 border border-gray-300 hover:border-text2 rounded-md">
                  <details className="dropdown" open={isDropdownOpen}>
                    <summary
                      className="btn m-1 w-[80px] px-2 py-2 bg-white text-sm text-text2 border-0 rounded-md flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsDropdownOpen(!isDropdownOpen);
                      }}
                    >
                      {selectedCountry ? (
                        <>
                          <img
                            src={selectedCountry.flag}
                            alt="Country"
                            width={20}
                            height={15}
                            style={{ display: "inline" }}
                          />
                          {selectedCountry.code}
                        </>
                      ) : (
                        "+Code"
                      )}
                      <LuChevronDown className="text-xs" />
                    </summary>
                    <ul
                      className="menu dropdown-content bg-white shadow-md rounded-box z-1  p-2 border border-gray-300 max-h-[200px] w-[200px] sm:w-[300px] overflow-y-auto "
                      style={{
                        flexFlow: "initial",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Search Input */}
                      <div className="sticky top-0 bg-white pb-2 mb-2 border-b border-gray-200">
                        <div className="relative">
                          <LuSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-text2"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>

                      {/* Country List */}
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country, idx) => (
                          <li key={idx} className="w-full">
                            <a
                              onClick={() => handleCountrySelect(country)}
                              className="flex items-center gap-3 w-full px-2 py-2 hover:bg-gray-100 cursor-pointer"
                              style={{ backgroundColor: "#f3f4f6" }}
                            >
                              <img
                                src={country.flags.png}
                                alt="Country"
                                width={24}
                                height={16}
                                className="rounded"
                              />
                              <span className="font-medium">
                                {country.idd.root +
                                  (country.idd.suffixes?.[0] || "")}
                              </span>
                              <span className="text-xs text-text2">
                                {country.name.common}
                              </span>
                            </a>
                          </li>
                        ))
                      ) : (
                        <li className="px-2 py-2 text-sm text-gray-500 text-center">
                          No countries found
                        </li>
                      )}
                    </ul>
                  </details>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="flex-1 input input-lg px-2 py-2 outline-none bg-white text-sm text-text2 border-0 rounded-md focus:outline-0 focus:shadow-0"
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

              {/* Recaptcha */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value) => setRecaptchaValue(value)}
                className="my-4"
              />

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
