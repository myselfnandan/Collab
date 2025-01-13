import React from 'react';
import {Linkedin, Mail} from 'lucide-react';
import InstructorStats from './InstructorStats';
import SocialLink from './SocialLink';
import { CustomImage } from '../Components/image'

export default function InstructorSection() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          <span className="text-transparent bg-clip-text bg-black">
            Meet Your Instructor
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <CustomImage
              src="/piyush2.jpg"
              alt="Piyush"
              // @ts-ignore
              className="relative w-72 h-72 object-cover rounded-xl"
              width={288}
              height={288}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">Piyush Choudhary</h3>
            <p className="text-black mb-4">Software Engineer @Top Leading Bank</p>
            <p className="text-black mb-6">
              With 3+ years of experience in software development and a passion for teaching,
              Piyush has helped over 100+ students master DSA concepts and ace their technical interviews.
            </p>

            <InstructorStats />

            <div className="flex gap-4 justify-center lg:justify-start mt-6">
             
              <SocialLink href="https://www.linkedin.com/in/piyush-choudhary3008/"  icon={<Linkedin />} label="LinkedIn"
              />
              <SocialLink href="mailto:aashuchoudhary52@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}