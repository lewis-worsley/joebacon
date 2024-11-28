import { contactDetails, keyStrengths } from "@/constants";
import {
  CalendarCheck2,
  CircleCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <section className='py-20 bg-experience text-center md:text-start' id="about">
      <div className='container'>
        <small className='font-bold text-[14px] md:text-[16px] text-white-1'>
          Marketing & Communications Expertise Since 2008
        </small>
        <h2 className='text-xl md:text-2xl text-white-1 mt-5'>Your Partner in Marketing & Communications</h2>
        <div className='grid md:grid-cols-2'>
          <div className="mt-5 space-y-5 text-white-1">
            <p>
              {`I'm a results-driven marketing and communications consultant with dedicated experience
                since 2008 of spearheading dynamic teams for industry-leading contractors
                and SMEs in the construction sector.`}
            </p>
            <p>
              {`Throughout my career, I've developed my skills in crafting and executing comprehensive
                marketing and communications strategies that elevate brands, drive engagement and
                generate measurable results.`}
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
                href="#contact"
                aria-label="Send an email to book a free marketing and communications consultation with Joe Bacon"
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
            <div className="mt-5 space-y-5">
              {contactDetails.map(({ type, href, label, icon }) => (
                <div key={type} className="flex font-bold justify-center">
                  <a
                    href={href}
                    className="flex gap-2 items-center"
                    target={type === "linkedIn" ? "_blank" : undefined}
                    rel={type === "linkedIn" ? "noopener noreferrer" : undefined}
                  >
                    {icon}
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience