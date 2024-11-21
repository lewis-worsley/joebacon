"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

const ContactFormSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters long"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
	const { toast } = useToast();
	const [status, setStatus] = useState<string | null>(null);

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		}
	});

	const onSubmit = async (data: ContactFormValues) => {
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setStatus("Email sent successfully!");
				toast({
					title: "Success! Thanks for reaching out!",
					description: "Your message has been sent!",
					variant: "primary",
				});
				form.reset();
			} else {
				setStatus(result.error || "Something went wrong. Please try again.");
				toast({
					title: "Failed to Send Email",
					description:
						result.error ||
						"We encountered an issue while sending your message. Please try again later.",
					variant: "destructive",
				});
			}
		} catch (error: any) {
			console.error(error);
			setStatus("An error occurred. Please try again later.");
			toast({
				title: "Unexpected Error",
				description:
					"Something went wrong on our end. Please refresh the page and try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<section className="py-20 bg-contact-form">
			<div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="md:col-span-2 bg-white-1 p-10 rounded-lg shadow-lg text-center md:text-start">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-5 align"
						>
							<div className="space-y-3">
								<h2 className="text-2xl">Let's Work Together</h2>
								<p>You're welcome to book a free consultation, just mention a date and time in your message.</p>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="md:grid md:grid-cols-3 items-center">
										<FormLabel className="col-span-1">Email*</FormLabel>
										<FormControl className="md:col-span-2">
											<Input placeholder="youremail@address.com" {...field} />
										</FormControl>
										<FormMessage className="col-span-3" />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem className="md:grid md:grid-cols-3 items-center">
										<FormLabel className="col-span-1">Subject line*</FormLabel>
										<FormControl className="md:col-span-2">
											<Input placeholder="Enter subject line" {...field} />
										</FormControl>
										<FormMessage className="col-span-3" />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem className="md:grid md:grid-cols-3 items-start gap-2">
										<FormLabel className="col-span-1">Message*</FormLabel>
										<div className=" md:col-span-2 space-y-2">
											<FormDescription>
												Tell me about your business and what services you're interested in.
											</FormDescription>
											<FormControl>
												<Textarea
													className="h-32"
													placeholder="Tell me how I can help you."
													{...field}
												/>
											</FormControl>
										</div>
										<FormMessage className="col-span-3" />
									</FormItem>
								)}
							/>

							<Button type="submit" className="md:float-end px-5">
								Submit
							</Button>
							{status && (
								<p className="mt-2 px-5 text-center text-sm">{status}</p>
							)}
						</form>
					</Form>
				</div>
				<div className="space-y-5 md:col-span-1">
					<h3 className="text-xl p-10 text-center md:text-start">Helpful information</h3>

				</div>
			</div>
		</section>
	);

};

export default ContactForm;