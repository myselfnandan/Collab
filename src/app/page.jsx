'use client';

import Link from "next/link";
import { CustomImage } from '../Components/image'
import Card from "../Components/Card";
import CardCode from "../Components/Card-2";
import Testimonials from "../Components/Testimonials";

const Home = () => {

  return (
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy md:mt-10">
      <div className="relative isolate px-6 pt-14 lg:px-8 lg:pb-[15vh]">
        <div className="mx-auto max-w h-auto flex flex-col items-center justify-around md:flex-row gap-20 mt-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6 animate-title">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                7-Day Free DSA Bootcamp
              </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-blue-200 mb-8 max-w-2xl animate-fade-in">
              {`Dive into the world of coding with our specially designed 7-Day Coding Bootcamp,tailored for absolute beginners. No prior programming experience? No problem!`}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Updated Link Component without <a> */}
              <Link
                href="/bootcamp"
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 animate-pulse flex items-center space-x-2"
              >
                Get started
              </Link>
              <Link
                href="/bootcamp"
                className="text-sm font-semibold text-blue-200"
              >
                Learn more →
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center h-auto max-w-2xl text-blue-200">
            <CustomImage src="/Programming-amico.png" alt="Programming" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className=" min-h-[70vh] flex bg-white mt-[5vh] pt-[5vh] justify-center items-center pb-[5vh]">
        <div className="mainBox w-full max-width-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-6 
        ">
          <p className="font-bold text-2xl mb-3 text-center pb-3">Our Courses</p>
          <div className="overflow-hidden flex flex-col md:flex-row">
            {/* TextBox */}
            <div className="TextBox p-6 flex-1">
              <h3 className="font-bold text-lg mb-2 text-black">DSA Mastery: Cracking the Code</h3>
              <p className="text-base text-gray-700 mb-4 text-base sm:text-xs md:text-base">
                {`Master the core concepts of Data Structures and Algorithms (DSA) through hands-on learning and interactive problem-solving.
                This bootcamp is designed to build a strong foundation in DSA, essential for excelling in technical interviews and solving real-world coding challenges.
                With expert-led sessions, live coding exercises, and algorithmic problem sets, you'll learn to write efficient, scalable, and optimized code.`}
              </p>

              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link
                  href="/course"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Launch
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 p-6">
            <CustomImage src="/team.svg" alt="Course Image" width={300} height={300} className="w-full h-auto object-cover rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <CardCode/>
      <Testimonials/>
    </div>
  );
};

export default Home;
