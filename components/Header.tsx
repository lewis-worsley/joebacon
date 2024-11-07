import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
	return (
		<header className='drop-shadow-lg shadow-md sticky'>
			<nav className='container py-5'>
				<div className='flex flex-row justify-between'>
					<div>
						<Image
							src="/logo.svg"
							alt='Joe Bacon logo'
							width={120}
							height={20}
						/>
					</div>
					<div className='space-x-10 md:space-x-20 font-bold text-blue-1 text-[14px]'>
						<Link href="">Services</Link>
						<Link href="">About</Link>
						<Link href="">Portfolio</Link>
						<Button>Free Consultation</Button>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header