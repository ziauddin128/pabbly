"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ListBook from "../../../public/Icons/ListBook";
import Plug from "../../../public/Icons/Plug";
import Dollar from "../../../public/Icons/Dollar";
import Email from "../../../public/Icons/Email";
import Message from "../../../public/Icons/Message";
import Check from "../../../public/Icons/Check";
import Chain from "../../../public/Icons/Chain";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo";

export default function LeftSlide() {
  let slides1 = [
    {
      title: "Pabbly Connect",
      description: "Automate tasks & save 100X time",
      icon: <Plug></Plug>,
    },
    {
      title: "Pabbly Subscription Billing",
      description: "Sell online & collect payments.",
      icon: <Dollar></Dollar>,
    },
    {
      title: "Pabbly Email Marketing",
      description: "Send emails to subscribers.",
      icon: <Email></Email>,
    },
    {
      title: "Pabbly Hook",
      description: "Webhook event handling for scalable applications.",
      icon: <Chain></Chain>,
    },
    {
      title: "Pabbly ChatFlow",
      description:
        "Automate your marketing, sales & customer support over WhatsApp.",
      icon: <Message></Message>,
    },
  ];

  let slides2 = [
    {
      title: "Pabbly Form Builder",
      description: "Create forms and gather leads.",
      icon: <ListBook></ListBook>,
    },
    {
      title: "Pabbly Email Verification",
      description: "Verify and removes bad emails.",
      icon: <Check></Check>,
    },
  ];
  return (
    <div className="bg-bg1 h-full p-6 flex items-center">
      <Link href="/" className="absolute top-6 left-6">
        <Logo className="w-[150px] h-[42px]" />
      </Link>
      <div className="w-full h-fit">
        <div className="mt-15 mb-5 text-center flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            No Restrictions on Features!
          </h1>
          <p className="text-base font-normal text-text1">
            Scale & Grow Your Business with Pabbly.
          </p>
        </div>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            {/* Slide 1 */}
            <div className="flex flex-col space-y-5 p-10 lg:p-0 xl:px-10">
              {slides1.map((slide, index) => (
                <div key={index} className="flex items-center gap-3">
                  {slide.icon}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 2 */}
            <div className="flex flex-col space-y-5 px-10">
              {slides2.map((slide, index) => (
                <div key={index} className="flex items-center gap-3">
                  {slide.icon}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Btm image */}
        <div className="flex justify-center gap-5 mt-10">
          <Image src="/images/aicpa.svg" alt="AICPA" width={80} height={80} />
          <Image src="/images/iso.svg" alt="ISO" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}
