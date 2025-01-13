'use client';

import { CustomImage } from '../../Components/image'
import Page_02 from '../../Components/Page_02';

const About =() =>{
  return(
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
      <div className="mx-auto max-w-full h-auto flex flex-col items-center justify-around md:flex-row gap-10 pt-10 pl-2 pr-2 md:ml-20 md:pt-20 mt-[5rem]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Piyush Choudhary
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-200">
            Technical Architect & Founder
          </p>

          <p className="mt-4 text-pretty text-sm font-medium sm:text-xl text-justify md:text-md text-blue-200 mb-8 max-w-2xl animate-fade-in">
            A skilled Software Engineer at a leading investment bank, specializing in backend development and data structures & algorithms (DSA). 
            As a passionate instructor with 3 years of experience, who has trained aspiring developers in backend technologies and DSA, 
            focusing on clean code and interview preparation. Proficient in Java, SpringBoot, and cloud platforms like AWS, 
            a collaborative problem solver and mentor.
          </p>
        </div>

        <div className="flex items-center justify-center h-auto max-w-2xl text-blue-200 lg:w-3xl lg:pl-20">
          <CustomImage
            src="/Piyush.png"
            alt="Piyush Choudhary's Profile Picture"
            className="w-auto h-auto max-w-full max-h-[500px]"
            width={500}
            height={500}
          />
        </div>
      </div>
     <Page_02 />
    </div>
  )
}

export default About;
