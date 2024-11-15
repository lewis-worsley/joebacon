import { contactDetails, keyStrengths } from "@/constants";
import {
  CalendarCheck2,
  CircleCheck,
  ExternalLink,
  Mail,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <section className='py-20 bg-experience text-center md:text-start' id="about">
      <div className='container'>
        <small className='font-bold text-[14px] md:text-[16px] text-white-1'>15+ Years of Marketing & Communications Expertise</small>
        <h2 className='text-xl md:text-2xl text-white-1 mt-5'>Your Partner in Marketing & Communications</h2>
        <div className='grid md:grid-cols-2'>
          <div className="mt-5 space-y-5 text-white-1">
            <p>
              I'm a results-driven marketing and communications consultant with more than 15 years
              of dedicated experience spearheading dynamic teams for industry-leading contractors
              and SMEs in the construction sector.
            </p>
            <p>
              Throughout my career, I've developed my skills in crafting and executing comprehensive
              marketing and communications strategies that elevate brands, drive engagement and
              generate measurable results.
            </p>
            <div className="space-y-5 pt-5 pb-5">
              {keyStrengths.map((strength, index) => (
                <span key={index} className="flex gap-2 text-sm items-center text-start sm:place-content-center md:place-content-start">
                  <CircleCheck fill="#FFFFFF" color="#003578" className="min-w-10" />
                  {strength}
                </span>
              ))}
            </div>
            <Button
              className="bg-white-1 text-blue-1 hover:bg-gray-200"
              asChild
            >
              <Link
                href="mailto:joefbacon@icloud.com?subject=Marketing%20Consultation&body=Hello%20Joe,%0D%0A%0D%0AI'm%20interested%20in%20your%20services."
                aria-label="Send an email to book a free marketing consultation"
              >
                Book a free consultation
                <CalendarCheck2 />
              </Link>
            </Button>
          </div>
          <div className="justify-self-center text-center text-white-1 hidden md:block">
            <div
              className="flex flex-col items-center justify-center overflow-hidden rounded-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-white-1 mx-auto md:mt-10 lg:mt-0"
            >
              <Image
                src="/images/joe-bacon-headshot.jpg"
                alt="Joe Bacon"
                width={225}
                height={225}
                className="object-contain object-top pt-16 pl-8"
              />
            </div>
            <div className="mt-5 place-self-center space-y-5 items">
              <div className="flex gap-2 items-center font-bold justify-center">
                <Phone size={20} />
                <a href="tel:07541200062" className="text-white">
                  {contactDetails.phone}
                </a>
              </div>
              <div className="flex gap-2 items-center font-bold justify-center">
                <Mail size={20} />
                <a href="mailto:joefbacon@icloud.com?subject=Marketing%20Inquiry">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex gap-2 items-center font-bold justify-center">
                <ExternalLink size={20} />
                <a
                  href="https://linkedin.com/in/joefbacon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {contactDetails.linkedIn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience