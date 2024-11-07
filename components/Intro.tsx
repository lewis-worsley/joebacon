import { Award, ChartNoAxesCombined, Hourglass, Medal } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Intro = () => {
  const about = [
    {
      icon: <Hourglass size={20} />,
      description: "15+ years of experience",
    },
    {
      icon: <Award size={20} />,
      description: "NCTJ-qualified journalist",
    },
    {
      icon: <ChartNoAxesCombined size={20} />,
      description: "Expert in business growth",
    },
  ];

  return (
    <section className="container">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="order-1 md:order-2 flex justify-center md:justify-end mb-5 md:mb-0 md:bg-transparent rounded-full">
          <Image
            src="/images/joe-bacon.png"
            alt="Joe Bacon"
            width={350}
            height={350}
            className="size-60 md:size-fit rounded-full md:rounded-none md:border-0 object-contain object-top p-1"
          />
        </div>
        <div className="order-2 md:order-1 flex flex-col space-y-5 text-center md:text-left place-items-center md:place-items-start">
          <small className="font-bold text-[14px] md:text-[16px]">Marketing & Communications consultant</small>
          <h1 className="text-2xl md:text-3xl font-bold">Marketing & Communication Services</h1>
          <p className="md:w-[90%] lg:w-[60%] md:text-lg">
            Flexible and affordable marketing and communication services for small and medium-sized enterprises.
          </p>
          <div className="flex space-x-5 pb-5">
            <Button variant="default">Schedule call now</Button>
            <Button variant="ghost">Services</Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 text-sm text-blue-1 font-bold md:mr-5">
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
