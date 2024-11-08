import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

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
		<header className='drop-shadow-lg shadow-md sticky'>
			<nav className='container py-5'>
				<div className='flex flex-row justify-between'>
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
					<div className='space-x-10 md:space-x-20 font-bold text-blue-1 text-[14px]'>
						{navLinks.map(({ name, href }) => (
							<Link href={href} key={name}>{name}</Link>
						))}
						<Button>Free Consultation</Button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header