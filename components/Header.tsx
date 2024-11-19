import { navLinks } from '@/constants';
import { CalendarCheck2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

const Header = () => {
	return (
		<header className='drop-shadow-lg shadow-md sticky top-0 backdrop-blur-md bg-white-1 z-50' id='/'>
			<nav className='container py-3'>
				<div className='flex flex-row justify-between items-center'>
					<div>
						<Link href="/">
							<Image
								src="/images/joe-bacon-logo-in-blue.jpg"
								alt='Joe Bacon logo'
								width={180}
								height={40}
							/>
						</Link>
					</div>
					<div className='space-x-7 md:space-x-12 lg:space-x-20 font-bold text-blue-1 text-[14px] hidden md:block'>
						{navLinks.map(({ label, href }) => (
							<Link href={href} key={label} className='hover:text-gray-500'>{label}</Link>
						))}
						<Button asChild>
							<Link
								href="mailto:info@joebaconconsulting.com?subject=Marketing%20and%20Communications%20Enquiry"
								aria-label="Send an email to book a free marketing and communications consultation with Joe Bacon"
							>
								Free consultation <CalendarCheck2 />
							</Link>
						</Button>
					</div>
					<MobileNav />
				</div>
			</nav>
		</header>
	);
};

export default Header