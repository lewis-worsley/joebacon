import { StyledIcon } from "@/utils/helpers";
import {
	Atom,
	BookOpenCheck,
	Camera,
	ChartColumnIncreasing,
	Folders,
	Handshake,
	MessageCircleMore,
	MonitorCheck,
	PencilRuler,
	PenLine,
	Presentation,
	Send,
	Target
} from "lucide-react";

export const support = [
  `I'll use my industry knowledge to unlock your brand's potential`,
  `I’ll help you develop a marketing plan`,
  `I’ll be on-hand to help you achieve your business goals`,
];

export const navLinks = [
	{
		label: "Services",
		href: "#services",
	},
	{
		label: "About",
		href: "#about",
	},
];

export const tabsData = [
	{
		value: "knowledge",
		title: "Industry Knowledge",
		description: "I understand the unique challenges and opportunities faced by companies.",
		className: "rounded-tl-md",
		icon: <BookOpenCheck color='#0047A3' size={60} />,
	},
	{
		value: "solutions",
		title: "Cost-Effective Solutions",
		description: "I offer flexible and personalised consulting services tailored to your budget.",
		className: "",
		icon: <Handshake color='#0047A3' size={60} />,
	},
	{
		value: "results",
		title: "Measureable Results",
		description: "I track and measure the impact of your marketing efforts to ensure you're getting a return on your investment.",
		className: "rounded-tr-md",
		icon: <Target color='#0047A3' size={60} />,
	},
];

export const whatIOffer = [
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

export const contactDetails = {
	phone: "07541 200062",
	email: "joefbacon@icloud.com",
	linkedIn: "linkedin.com/in/joefbacon",
};