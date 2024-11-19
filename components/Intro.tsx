import { about } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Intro = () => {
  return (
    <section className="container mt-10 mb-20 md:my-0 md:mt-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="order-1 md:order-2 flex justify-center md:justify-end mb-5 md:mb-0 md:bg-transparent rounded-full">
          <Image
            src="/images/joe-bacon-headshot.jpg"
            alt="Joe Bacon"
            width={300}
            height={300}
            className="size-60 md:min-w-[250px] md:max-w-[300px] md:size-fit rounded-full md:rounded-none md:border-0 object-contain object-top"
          />
        </div>
        <div className="order-2 md:order-1 flex flex-col space-y-5 text-center md:text-left place-items-center md:place-items-start md:mr-10">
          <small className="font-bold text-[14px] md:text-[16px]">Marketing & Communications Consultant</small>
          <h1 className="text-2xl lg:text-4xl font-bold">Marketing & Communication Services</h1>
          <p className="md:w-[90%] lg:w-[60%] lg:text-lg">
            Flexible and affordable marketing and communication services for small and medium-sized enterprises.
          </p>
          <div className="flex space-x-5 pb-5">
            <Button variant="default" asChild>
              <Link href="mailto:joefbacon@icloud.com?subject=Marketing%20Inquiry">
                Get expert marketing help
              </Link>
            </Button>
            <Button variant="ghost" className="bg-gray-100 hover:bg-gray-200" asChild>
              <Link href="#services">
                Services
              </Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 text-sm text-blue-1 font-bold items-center">
            {about.map(({ icon, description }, index) => (
              <div key={index} className="flex items-center gap-2">
                {icon}
                {description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
