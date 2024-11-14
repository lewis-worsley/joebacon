
import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/constants";
import { CalendarCheck2, Menu } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
	return (
		<section className='sm:hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<Menu className="cursor-pointer" aria-label="menu" />
				</SheetTrigger>
				<SheetContent
					side="top"
					className='border-none'
					aria-describedby="Navigation menu; the following links include Services, About and Portfolio"
				>
					<SheetTitle className="hidden">Navigation</SheetTitle>
					<SheetClose asChild>
						<Link href="/">
							<Image
								src="logo.svg"
								alt="logo"
								width={120}
								height={20} />
						</Link>
					</SheetClose>
					<div className="overflow-y-auto">
						<nav className="flex flex-col gap-y-10 my-10">
							{navLinks.map(({ label, href }) => (
								<SheetClose key={label} className="text-center" asChild>
									<Link href={href} className="font-bold text-blue-1 hover:text-gray-500">{label}</Link>
								</SheetClose>
							))}
							<Button asChild>
								<Link href="mailto:joefbacon@icloud.com?subject=Marketing%20Inquiry">
									Free Consultation <CalendarCheck2 />
								</Link>
							</Button>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav
