import { contactDetails } from "@/constants";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="py-20 bg-grey-2 text-white-1 text-center md:text-start">
			<div className="container text-center">
				<div className="grid md:grid-cols-2">
					<div className="flex flex-col items-center md:items-start">
						<a href="#/">
							<Image
								src="/images/joe-bacon-white-logo.png"
								alt="Joe Bacon logo"
								width={150}
								height={40}
								className="mb-10"
							/>
						</a>
						<div className="space-y-5">
							{contactDetails.map(({ type, href, label, icon }) => (
								<div key={type} className="flex gap-2 justify-center md:justify-start font-bold">
									<a
										href={href}
										target={type === "linkedIn" ? "_blank" : undefined}
										rel={type === "linkedIn" ? "noopener noreferrer" : undefined}
										className="flex gap-2 items-center"
									>
										{icon}
										{label}
									</a>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-10 mt-10 md:mt-0">
						<div className="flex gap-5 sm:gap-8 md:gap-10 font-bold justify-center md:justify-start">
							<a href="#services">Services</a> |
							<a href="#about">About</a> |
							<a href="#testimonials">Testimonials</a>
						</div>
						<div className="text-center md:text-start">
							Joe Bacon - a Marketing & Communications Consultant in the UK helping small to
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
