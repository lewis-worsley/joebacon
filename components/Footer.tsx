import { ExternalLink, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="py-20 bg-grey-2 text-white-1 text-center md:text-start">
			<div className="container text-center">
				<div className="grid md:grid-cols-2">
					<div className="flex flex-col items-center md:items-start">
						<a href="#/">
							<Image
								src="/joe-bacon-logo-in-white.svg"
								alt="Joe Bacon logo"
								width={150}
								height={40}
								className="mb-10"
							/>
						</a>
						<div className="space-y-5 justify-center">
							<div className="flex gap-2 items-center justify-center md:justify-start font-bold">
								<Phone size={20} />
								<a href="tel:07541200062" className="text-white">
									07541 200062
								</a>
							</div>
							<div className="flex gap-2 items-center justify-center md:justify-start font-bold">
								<Mail size={20} />
								<a href="mailto:joefbacon@icloud.com?subject=Marketing%20Inquiry">
									joefbacon@icloud.com
								</a>
							</div>
							<div className="flex gap-2 items-center justify-center md:justify-start font-bold">
								<ExternalLink size={20} />
								<a
									href="https://linkedin.com/in/joefbacon"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white"
								>
									linkedin.com/in/joefbacon
								</a>
							</div>
						</div>
					</div>
					<div className="space-y-10 mt-10 md:mt-0">
						<div className="flex gap-5 sm:gap-10 font-bold justify-center md:justify-start">
							<a href="#services">Services</a> |
							<a href="#about">About</a> |
							<a href="">Portfolio</a>
						</div>
						<div className="text-center md:text-start">
							Joe Bacon - a Marketing & Communications consultant in the UK helping small to
							medium-sized enterprises with their marketing strategy, communications, brand
							management, and more.
						</div>
					</div>
				</div>
				<small className="flex flex-col text-sm text-white-1 mt-10">Copyright © 2024 Joe Bacon. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
