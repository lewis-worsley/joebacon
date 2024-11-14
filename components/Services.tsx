import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { support, tabsData, whatIOffer } from '@/constants';
import { CircleCheck } from 'lucide-react';

const Services = () => {
  return (
    <section className='bg-grey-1 py-20 text-center md:text-start' id='services'>
      <div className='container space-y-10'>
        <div className='space-y-5'>
          <small className='font-bold text-[14px] md:text-[16px]'>Services designed to elevate your business</small>
          <h2 className='text-xl md:text-2xl'>Expert Marketing Support For Your Business</h2>
          <p className='md:w-[60%]'>
            With over 15 years’ experience in marketing and communications, I specialise in
            helping businesses elevate their brand, engage their audience, and achieve measurable
            results. From strategic planning to hands-on execution, my services are tailored
            to meet your unique needs and drive real growth.
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg md:text-xl">How I Can Help Your Business Grow</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="md:w-[90%]">
                If you operate a small or medium-sized enterprise, finding time to update your branding,
                create content for social media, produce new case studies, make changes to your website,
                write work-winning tender documents, organise your hospitality events AND run your
                business, can be incredibly difficult.
              </p>
              <p className="font-bold text-blue-1 mt-4">I can help!</p>
              <div className="flex-col flex gap-3 text-sm mt-6">
                {support.map((support, index) => (
                  <span
                    key={index}
                    className="flex gap-2 items-center text-start sm:place-content-center md:place-content-start"
                  >
                    <CircleCheck className="min-w-10" color="white" fill="#0047A3" />
                    {support}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-auto rounded-none mt-5 md:mt-0">
              <Tabs defaultValue="knowledge" className='text-center'>
                <TabsList className='rounded-none w-full md:text-base'>
                  {tabsData.map(({ value, title, className }) => (
                    <TabsTrigger
                      value={value}
                      key={value}
                      className={className}
                    >
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className='bg-white-1 p-10 md:p-16 rounded-b-xl drop-shadow-md'>
                  {tabsData.map(({ value, title, description, icon }) => (
                    <TabsContent value={value} key={value}>
                      <div className='flex flex-col items-center gap-2'>
                        <span className='mb-2'>{icon}</span>
                        <h4 className='text-blue-2'>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl mt-20 text-center">What I offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {whatIOffer.map(({ icon, label, description }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                {icon}
                <h4 className="text-[16px] text-blue-2 mt-2">{label}</h4>
                <p className="mt-2 w-[80%] md:w-[100%]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services