"use client";
import Logo from "../../../public/Logo";
import Link from "next/link";

import React, { useRef, useState } from "react";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import LeftSlide from "./../_components/LeftSlide";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

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
            <p className="text-sm text-text1">
              Don't have a Pabbly Account yet?
            </p>
            <Link
              href="/signup"
              className="text-text3 text-sm font-semibold px-3 py-2 rounded-sm border border-text3 hover:bg-bg2 hover:shadow"
            >
              Create Account
            </Link>
          </div>
          {/* Form */}
          <div className="max-w-[400px] w-full mx-auto bg-white rounded-md shadow-lg p-5">
            <div className="text-center space-y-1 mb-5">
              <h1 className="text-xl font-bold"> Forgot Password</h1>
              <p className="text-sm text-text1">
                Don't worry. We'll email reset link.
              </p>
            </div>

            <form>
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

              <button className="btn bg-text3 border-0 text-base font-medium text-white py-6 w-full rounded-md">
                Reset Link
              </button>

              <div className="flex justify-center items-center gap-2 mt-4 text-sm font-medium">
                <p className="text-text1">Remember your password?</p>
                <a href="/" className="text-text3 hover:underline">
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
