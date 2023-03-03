import React, { useState } from "react";
import Button from "../widgets/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import screenshot from "../../../public/assests/Screen Shot1.svg";
import Image from "next/image";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import signature from "../../../public/assests/signature.svg";
import components from "../../../public/assests/Component23.svg";
import docketbank from "../../../public/assests/Docketbank.svg";
import qr from "../../../public/assests/scan qr code.svg";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import img1 from "../../../public/assests/image 3.svg";
import img from "../../../public/assests/image 4.svg";
import mobile from "../../../public/assests/mobilegroup.svg";
import contrucsite1 from "../../../public/assests/Frame 454.png";
import contrucsite2 from "../../../public/assests/Screenshot 2023-02-22 at 10.18 1.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
export interface faqlistProps {
  id: number | string;
  question: string;
  answer: string;
  open: boolean;
}

export const accordionData: faqlistProps[] = [
  {
    id: "1SHIPPINGINFORMATION",
    question: "How can I cancel my order?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium",

    open: false,
  },
  {
    id: "2SHIPPINGINFORMATION",
    question: "How can I cancel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium",
    open: false,
  },
  {
    id: "3SHIPPINGINFORMATION",
    question: "How can I cancel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium",
    open: false,
  },
  {
    id: "4SHIPPINGINFORMATION",
    question: "How can I cancel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium",
    open: false,
  },
];
const HomePage = () => {
  const [getContent, setContent] = useState(null);
  const handleClick = (index: any) => {
    if (getContent === index) {
      return setContent(null);
    }
    setContent(index);
  };
  return (
    <>
      <div className="flex flex-col h-full justify-end">
        <div className="my-5 mx-5 sm:mx-12  relative  bg-primary-color text-white pt-12 pb-28 xl:pb-56 xl:pt-36 px-12 rounded-3xl flex items-center justify-center h-full">
          <div className="flex flex-col gap-8 items-center text-center max-w-2xl">
            <div className="text-2xl font-bold md:text-5xl">
              All your forms and dockets together in one place
            </div>
            <p className="text-xs text-blue-50 md:text-xl">
              Record time is a one stop paperwork and job management system that
              will digitise and streamline your business.
            </p>
            <div className="flex items-center mb-8">
              <Button
                value="start your free trial!"
                className="bg-primary-green py-2 px-3 sm:px-9 sm:py-4 rounded-sm sm:rounded  text-xs font-semibold  md:text-lg"
              />
              <Button
                value={
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <div className="rounded-full bg-primary-green flex items-center justify-center p-1 text-xs  md:text-lg">
                      <PlayArrowIcon fontSize="inherit" />
                    </div>
                    <h1 className="text-lg">What is Record Time?</h1>
                  </div>
                }
                className="px-3 py-2 sm:px-9 sm:py-4 rounded-sm sm:rounded"
              />
            </div>
            <div className="w-full absolute top-3/4 xl:top-2/3  flex items-center justify-center">
              <div className="  w-10/12 flex items-center justify-center">
                <div className="relative">
                  <Image src={screenshot} alt="video" />
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0  text-4xl flex items-center justify-center">
                  <div className="p-4 rounded-full bg-light-green  flex items-center justify-center">
                    <div className="p-2 rounded-full bg-primary-green flex items-center justify-center">
                      <PlayArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex items-center justify-between mt-28 md:mt-48 lg:mt-64 xl:mt-64 2xl:mt-96 max-w-5xl xl:max-w-7xl  mx-auto md:px-16 px-5">
          <div className="text-gray-500 font-medium flex items-center gap-1 sm:gap-2 md:text-2xl">
            <div className="w-18 h-18">
              <Image src={qr} alt="qr code" />
            </div>
            <h1 className="text-[8px] md:text-xl font-medium text-gary-500">
              QR Code Ready
            </h1>
          </div>
          <div className="text-gray-500  font-medium flex items-center gap-1 md:gap-2 ">
            <Image src={signature} alt="qr code" />
            <h1 className="text-[8px] font-medium text-gary-500 md:text-xl">
              Signature Ready
            </h1>
          </div>
          <div className="text-gray-500  font-medium flex items-center gap-1 md:gap-2">
            <CheckCircleOutlineIcon />
            <h1 className="text-[8px] font-medium text-gary-500 md:text-xl">
              Compliance Ready
            </h1>
          </div>
          <div className="text-gray-500  font-medium flex items-center gap-1 md:gap-2">
            <CameraAltOutlinedIcon />
            <h1 className="text-[8px] font-medium text-gary-500 md:text-xl">
              Proof of Work Ready
            </h1>
          </div>
        </div>

        <div className="bg-blue-50 my-4">
          <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between max-w-5xl xl:max-w-7xl mx-auto my-12 sm:gap-x-12 lg:gap-16 ">
            <div className="w-full lg:w-1/2 sm:w-1/3">
              <Image src={components} alt="componnets" />
            </div>
            <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col justify-centers items-center sm:items-start gap-6 sm:gap-9 ">
              <div className="flex flex-col items-center sm:items-start">
                <div className="gap-2 flex items-center text-xs text-gray-500">
                  {" "}
                  <hr className="border-2 w-5"></hr>
                  <p className="sm:text-2xl  ">Who We Are</p>
                  <hr className="border-2 w-5"></hr>
                </div>
                <p className="text-center sm:text-start text-primary-color text-2xl font-bold capitalize max-w-xs sm:max-w-2xl mt-2 sm:text-5xl sm:font-bold">
                  One Stop Paperwork and{" "}
                  <span className="text-primary-green">
                    Job Management System
                  </span>
                </p>
              </div>
              <p className="text-center text-xs text-gray-500 leading-6 sm:text-xl sm:text-start px-5 sm:px-0">
                Record TIME was born out of the Civil Industry in order to
                improve the docketing process. It was initially used for
                docketing and remote approvals of dockets. Today, Record TIME
                has grown into a management platform that any industry can use.
              </p>
              <div className="flex items-center  w-full justify-evenly sm:justify-between sm:max-w-lg text-gray-600 text-xs sm:text-lg sm:font-medium my-4">
                <ul className="flex flex-col gap-4 italic">
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Digital Dockets and Forms
                  </li>
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Job Scheduler
                  </li>
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Plant Management
                  </li>
                </ul>
                <ul className="flex flex-col gap-4 italic">
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Invoicing
                  </li>
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Bundy Clock/Timer
                  </li>
                  <li className="flex items-center gap-1">
                    {" "}
                    <CheckCircleOutlineIcon /> Export Mapper
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col gap-8 items-center w-full justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="gap-2 flex items-center text-xs text-gray-500 ">
              {" "}
              <hr className="border-2 w-5"></hr>
              <p className="sm:text-2xl  ">Complete Docketing Solution</p>
              <hr className="border-2 w-5"></hr>
            </div>
            <h1 className="text-2xl text-black font-bold sm:text-5xl">
              Core Features of{" "}
              <span className="text-primary-green">Record Time</span>
            </h1>
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full max-w-5xl xl:max-w-7xl mx-auto my-8 sm:my-16">
            <div className="lg:w-1/2 sm:w-1/3">
              <div className="border-l-4 border-primary-green  items-center my-16">
                <div className="pl-8 max-w-sm flex flex-col gap-4">
                  <label className="text-gray-400 text-xs font-medium">
                    Easy Templates
                  </label>
                  <h2 className="text-base font-semibold text-black">
                    Modular Dockets and Forms
                  </h2>
                  <p className="text-xs text-gray-600">
                    Record Time allows you to create docket form templates and
                    replicate any paperwork. Design the document to look and
                    work exactly the way you want it to work.
                  </p>
                  <div className="text-primary-color font-semibold text-xs">
                    See all features{" "}
                    <span className="stroke-0">
                      <ArrowRightAltOutlinedIcon />
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-primary-green border-opacity-40  items-center my-16">
                <div className="pl-8 max-w-sm flex flex-col gap-4">
                  <label className="text-gray-400 text-xs font-medium">
                    Job Scheduler
                  </label>
                  <h2 className="text-base font-semibold text-black">
                    Schedule Staff and Plants
                  </h2>
                </div>
              </div>
              <div className="border-l-4 border-primary-green border-opacity-40  items-center my-16">
                <div className="pl-8 max-w-sm flex flex-col gap-4">
                  <label className="text-gray-400 text-xs font-medium">
                    Designed for Safety
                  </label>
                  <h2 className="text-base font-semibold text-black">
                    Safety and Compliance
                  </h2>
                </div>
              </div>
            </div>
            <div className="sm:w-2/3 lg:w-1/2 ">
              <Image
                src={docketbank}
                alt="docketbank template"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-around  gap-4 items-center bg-primary-color py-6 text-white">
          <h1 className="text-sm font-medium sm:text-lg lg:text-3xl">
            Get a Demo and Try Record Time Today!
          </h1>
          <div className="rounded-sm border-2  flex items-center justify-between ">
            <input
              className="h-14 w-80  lg:w-[400px] 2xl:w-[560px]  p-4 outline-none"
              placeholder="Enter your email address here "
            />
            <Button
              value="Get Demo Now "
              className="text-white font-semibold bg-primary-green h-14 p-4 sm:px-12 flex items-center justify-center"
            />
          </div>
        </div>
        <div className="bg-blue-50">
          <div className="mt-14 flex flex-col gap-8 items-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="gap-2 flex items-center text-xs text-gray-500 ">
                {" "}
                <hr className="border-2 w-5"></hr>
                <p className="sm:text-2xl  ">Testimonials</p>
                <hr className="border-2 w-5"></hr>
              </div>
              <h1 className="text-2xl text-black font-bold sm:text-5xl">
                Some of the{" "}
                <span className="text-primary-green">Success Stories</span>
              </h1>
            </div>
            <div className="flex flex-col items-start w-full gap-4 px-4 max-w-md py-8 rounded-lg border">
              <p className="text-start leading-7 tracking-wide text-black text-opacity-60">
                “Record TIME provides an efficient way for engineers to generate
                inspection reports, complete with photos, signatures, and
                annotations, which can also serve as proof of work for invoicing
                on a monthly basis, making it a versatile and practical tool for
                engineering businesses.”
              </p>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full border bg-blue-100"></div>
                <div>
                  <h1 className="font-semibold">ACT Geotechnical Engineers</h1>
                  <p>Jeremy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-color py-8 flex flex-col gap-8 items-center text-text-light-green text-xs font-bold sm:text-2xl lg:text-3xl sm:mx-16 lg:mx-28 mt-20 sm:rounded-xl lg:rounded-2xl">
            <h1>Digital Dockets and Forms</h1>
            <h1>Invoicing</h1>
            <h1>Job Scheduler</h1>
            <p className="text-xl font-bold capitalize text-white sm:text-3xl lg:text-5xl my-4 italic">
              What can you use Record Time for?
            </p>
            <h1>Job Scheduler</h1>
            <h1>Invoicing</h1>
            <h1>pant management</h1>
          </div>
          <div className=" py-20 w-full flex flex-col sm:flex-row-reverse sm:items-start">
            <div className="w-full flex flex-col gap-8 items-center sm:items-start">
              <div className="w-full flex flex-col gap-2 items-center sm:items-start">
                <div className="gap-2 flex items-center text-xs text-gray-500">
                  {" "}
                  <hr className="border-2 w-5"></hr>
                  <p className="sm:text-2xl  ">Download our Mobile App Today</p>
                  <hr className="border-2 w-5"></hr>
                </div>
                <div className="text-center sm:text-start text-primary-color text-2xl font-bold capitalize max-w-xs sm:max-w-2xl mt-2 sm:text-5xl sm:font-bold">
                  <label>Access all you files with </label>
                  <span className="text-primary-green">Just One Tap</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 leading-6 sm:text-xl sm:text-start tracking-wide sm:leading-9 md:max-w-2xl px-5 sm:px-0">
                Manage your important files and documents effortlessly with our
                mobile app. With automatic syncing and notification alerts,
                access them securely from anywhere. Download the app today for
                easy and convenient document management.
              </p>
              <div className="flex items-center sm:justify-start gap-2 w-full justify-center">
                <Button
                  value={
                    <Image
                      src={img}
                      alt="social media"
                      className="w-25 md:w-32 xl:w-52"
                    />
                  }
                  className=" flex items-center justify-center"
                />
                <Button
                  value={
                    <Image
                      src={img1}
                      alt="social media"
                      className="w-25 md:w-32 xl:w-52"
                    />
                  }
                  className=" flex items-center justify-center"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center my-16 sm:my-0">
              <Image src={mobile} alt="mobileicon" className="w-80 xl:w-96" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-28 gap-8">
          <div className="flex flex-col items-center">
            <div className="gap-2 flex items-center text-xs text-gray-500 ">
              {" "}
              <hr className="border-2 w-5"></hr>
              <p className="sm:text-2xl  ">FAQs</p>
              <hr className="border-2 w-5"></hr>
            </div>
            <h1 className="text-2xl text-black font-bold sm:text-5xl">
              Most Common <span className="text-primary-green">Questions</span>
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            {accordionData.map((item, index) => {
              return (
                <div
                  className="max-w-md sm:max-w-xl md:max-w-3xl 2xl:max-w-6xl w-full mb-6 py-3 px-3 2xl:pl-10 2xl:py-10 border rounded md:rounded-xl bg-blue-50 bg-opacity-20 "
                  key={index}
                >
                  <div className="flex items-start justify-between">
                    <h1 className="text-lg font-semibold text-gray-700">
                      {item.question}
                    </h1>
                    <Button
                      value={
                        getContent === index ? (
                          <ArrowDropDownIcon className="cursor-pointer" />
                        ) : (
                          <ArrowDropUpIcon />
                        )
                      }
                      className="text-gray-400"
                      onClick={() => {
                        handleClick(index);
                      }}
                    />
                  </div>
                  {getContent === index ? (
                    <div className="flex">
                      <p className="text-gray-500 py-2">{item.answer}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start w-full justify-center   pl-4">
            <div className="flex flex-col items-center w-full justify-center">
              <div className="gap-2 flex items-center text-xs text-gray-500 ">
                {" "}
                <hr className="border-2 w-5"></hr>
                <p className="sm:text-2xl  ">Our Blogs</p>
                <hr className="border-2 w-5"></hr>
              </div>
              <h1 className="text-2xl text-black font-bold sm:text-5xl">
                Related to{" "}
                <span className="text-primary-green">Record Time</span>
              </h1>
            </div>
            <div className="flex flex-row gap-12 items-center justify-start lg:justify-center lg:gap-18 w-full mt-12 overflow-x-hidden">
              {[...Array(3)].map((i) => {
                return (
                  <div className="flex flex-col items-start  min-w-max" key={i}>
                    <div>
                      <Image
                        src={contrucsite1}
                        alt="construction"
                        className="w-72 lg:w-[440px]"
                      />
                    </div>
                    <h1 className="text-sm font-semibold lg:text-2xl my-4">
                      Record Time for an Owner Operator
                    </h1>
                    <p className="text-xs font-light max-w-[225px] lg:text-lg lg:max-w-sm">
                      For a business and operate machinery such as an Backhoes
                      or Excavators.
                    </p>
                    <label className="flex items-center gap-2  text-xs lg:text-lg  my-4">
                      <p className="font-semibold">Read More</p>{" "}
                      <span>
                        <ArrowRightAltIcon />
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-full mt-96">
          <div className="relative">
            <div className="pt-32 bg-blue-50  ">
              <div className="py-12 px-5 flex flex-col sm:flex-row sm:items-start sm:justify-evenly">
                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-lg font-semibold">About Record Time</h1>
                  <p className="text-xs leading-5 font-light max-w-xs">
                    Record TIME is a mobile forms and docketing tool that will
                    replace your tedious paper systems. It will allow you to
                    digitise your business effortlessly.
                  </p>
                  <div className="flex flex-row gap-3">
                    <div className="rounded-full bg-primary-green p-1 flex items-center justify-center text-primary-color">
                      <FacebookOutlinedIcon />
                    </div>
                    <div className="rounded-full bg-primary-green p-1 flex items-center justify-center text-primary-color">
                      <FacebookOutlinedIcon />
                    </div>
                    <div className="rounded-full bg-primary-green p-1 flex items-center justify-center text-primary-color">
                      <FacebookOutlinedIcon />
                    </div>
                  </div>
                </div>
                <div className="my-8 sm:my-0 flex flex-row w-full items-start justify-between sm:justify-evenly">
                  <ul>
                    <li className="text-base font-semibold pb-4 ">
                      Quick link
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      About Us{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Contact Us{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Quick{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Quick{" "}
                    </li>
                  </ul>
                  <ul>
                    <li className="text-base font-semibold pb-4  ">
                      Quick link
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Terms of Use{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Licence Agreement{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Quick{" "}
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      Quick{" "}
                    </li>
                  </ul>
                  <ul>
                    <li className="text-base font-semibold pb-4 ">
                      Download our App
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      <Button
                        value={
                          <Image
                            src={img}
                            alt="social media"
                            className="w-24 md:w-32 xl:w-52"
                          />
                        }
                        className=" flex items-center justify-center"
                      />
                    </li>
                    <li className="text-xs text-gray-600 tracking-wider py-2">
                      <Button
                        value={
                          <Image
                            src={img1}
                            alt="social media"
                            className="w-24 md:w-32 xl:w-52"
                          />
                        }
                        className=" flex items-center justify-center"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <hr></hr>
              <div className="bg-blue-50 px-5 py-5 flex flex-col sm:flex-row sm:items-center w-full">
                <div className="text-xs text-gray-500 text-center sm:w-3/4 sm:text-start md:text-lg">
                  2015 - 2019 Record TIME Pvt Ltd. All rights reserved. ABN: 99
                  604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609
                  AUSTRALIA | Support: 0421 955 630
                </div>
                <div className="text-center flex items-center w-full justify-center font-medium py-4 sm:w-1/4 md:text-base">
                  Developed by: WebTec Solutions
                </div>
              </div>
            </div>
            {/* <div className="h-16 w-16 bg-green-700 absolute left-4 -top-4 z-10"></div> */}
            <div className="absolute left-0 right-0 -top-96 bg-primary-color  text-white py-9 flex flex-col items-center gap-8   mt-20 sm:rounded-xl lg:rounded-2xl sm:max-w-xl md:max-w-3xl lg:max-w-7xl lg:justify-center sm:mx-auto min-w-max w-full">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-xl font-bold">
                  Flexible Pricing to Suit Your Needs
                </h1>
                <p className="text-xs text-gray-500">
                  Please fill this form to get custom plans in your email.
                </p>
              </div>
              <form className="flex flex-col gap-6 md:gap-12 lg:gap-16">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-16  items-center md:justify-center">
                  <div className="text-sm text-gray-500 flex items-center  gap-2 border-b border-gray-600 px-2 py-1 ">
                    <Person2OutlinedIcon />
                    <input
                      placeholder="Enter your full name"
                      className="bg-transparent w-80 md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                    />
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2 border-b border-gray-600 px-2 py-1 ">
                    <EmailOutlinedIcon />
                    <input
                      placeholder="Enter your email address"
                      className="bg-transparent w-80 md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row lg:gap-16 items-center md:justify-center">
                  <div className="text-sm text-gray-500 flex items-center gap-2 border-b border-gray-600 px-2 py-1 ">
                    <ApartmentOutlinedIcon />
                    <input
                      placeholder="Enter your company name"
                      className="bg-transparent w-80 md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                    />
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2 border-b border-gray-600 px-2 py-1 ">
                    <PhoneOutlinedIcon />
                    <input
                      placeholder="Enter your contact number"
                      className="bg-transparent w-80 md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                    />
                  </div>
                </div>
                <Button
                  value={"Submit now"}
                  className="bg-primary-green flex items-center justify-center mx-auto py-2 px-5 rounded-sm my-4 font-semibold tracking-wide capitalize"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
