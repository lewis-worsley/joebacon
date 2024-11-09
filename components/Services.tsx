import {
  Atom,
  Camera,
  ChartColumnIncreasing,
  CircleCheck,
  Folders,
  MessageCircleMore,
  MonitorCheck,
  PencilRuler,
  PenLine,
  Presentation,
  Send
} from 'lucide-react';

const Services = () => {
  const support = [
    "I'll use my industry knowledge to unlock your brand's potential",
    "I’ll help you develop a marketing plan",
    "I’ll be on-hand to help you achieve your business goals"
  ];

  const StyledIcon = (IconComponent: any) => {
    return <IconComponent color="#0047A3" size={40} />
  };

  const whatIOffer = [
    {
      icon: StyledIcon(ChartColumnIncreasing),
      label: "Strategic Marketing Planning",
      description: "Define target audiences and messaging, customised marketing plans and most effective channels",
    },
    {
      icon: StyledIcon(PencilRuler),
      label: "Corporate Branding",
      description: "Original concepts, adjustments or complete re-brands",
    },
    {
      icon: StyledIcon(Atom),
      label: "Brand Management",
      description: "Digital stationery, email signatures, working document management",
    },
    {
      icon: StyledIcon(Folders),
      label: "Marketing Collateral",
      description: "Case studies, brochures, bid templates, staff profiles/CVs, banners, flyers, stationery and vehicle livery designs",
    },
    {
      icon: StyledIcon(MonitorCheck),
      label: "Websites",
      description: "New conversion-focused sites, improvements, maintenance, newsfeed and updates",
    },
    {
      icon: StyledIcon(MessageCircleMore),
      label: "Social Media",
      description: "New profiles, account maintenance, content creation and planning, campaign management",
    },
    {
      icon: StyledIcon(Send),
      label: "Internal Communications",
      description: "Staff newsletters, bulletins, branded internal emails",
    },
    {
      icon: StyledIcon(Presentation),
      label: "Presentations",
      description: "Creating and adjusting templates",
    },
    {
      icon: StyledIcon(Camera),
      label: "Photography & Video",
      description: "Case study images, staff photographs, media release images, corporate videos",
    },
    {
      icon: StyledIcon(PenLine),
      label: "PR Liaison",
      description: "Editorial copywriting and media relations",
    },
  ];

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
        <div className='space-y-5'>
          <h3 className='text-lg md:text-xl'>How I Can Help Your Business Grow</h3>
          <p className='md:w-[40%]'>
            If you operate a small or medium-sized enterprise, finding time to update your branding,
            create content for social media, produce new case studies, make changes to your website,
            write work-winning tender documents, organise your hospitality events AND run your
            business, can be incredibly difficult.
          </p>
          <p className='font-bold text-blue-1'>I can help!</p>
          <div className='flex-col flex gap-3 text-sm'>
            {support.map((support, index) => (
              <span key={index} className='flex items-center gap-2 '>
                <CircleCheck className='min-w-10' color='white' fill='#0047A3' />
                {support}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-lg md:text-xl mt-20 text-center">What I offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {whatIOffer.map(({ icon, label, description }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center md:text-start md:place-items-start"
                >
                  {icon}
                  <h4 className="text-[16px] text-blue-2 mt-2">{label}</h4>
                  <p className="mt-2 w-[80%] md:w-[100%]">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services