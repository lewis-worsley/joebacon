import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header = () => {
	const navLinks = [
		{
			name: "Services",
			href: "#services",
		},
		{
			name: "About",
			href: "#about",
		},
		{
			name: "Portfolio",
			href: "#portfolio",
		},
	];

	return (
		<header className='drop-shadow-lg shadow-md sticky top-0 backdrop-blur-md bg-white-1 z-50' id='/'>
			<nav className='container py-5'>
				<div className='flex flex-row justify-between items-center'>
					<div>
						<Link href="/">
							<Image
								src="/logo.svg"
								alt='Joe Bacon logo'
								width={120}
								height={20}
							/>
						</Link>
					</div>
					<div className='space-x-10 md:space-x-20 font-bold text-blue-1 text-[14px] hidden sm:block'>
						{navLinks.map(({ name, href }) => (
							<Link href={href} key={name}>{name}</Link>
						))}
						<Button asChild>
							<Link href="mailto:joefbacon@icloud.com?subject=Marketing%20Inquiry">
								Free consultation
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