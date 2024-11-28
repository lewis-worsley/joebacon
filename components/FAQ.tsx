import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentlyAskedQuestions } from "@/constants";

const FAQ = () => {
	return (
		<Accordion type="single" collapsible className="w-full md:p-4">
			{frequentlyAskedQuestions.map(({ value, title, description }) => (
				<AccordionItem value={value} key={value}>
					<AccordionTrigger>{title}</AccordionTrigger>
					<AccordionContent>{description}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default FAQ
