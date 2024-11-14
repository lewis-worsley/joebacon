import { BookOpenCheck, Handshake, Target } from "lucide-react";

export const navLinks = [
	{
		label: "Services",
		href: "#services",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Portfolio",
		href: "#portfolio",
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