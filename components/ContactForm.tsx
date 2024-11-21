"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "./ui/textarea"

const ContactFormSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters long"),
	message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>

const ContactForm = () => {
	const [status, setStatus] = useState<string | null>(null)

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		}
	})

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
				form.reset();
			} else {
				setStatus(result.error || "Something went wrong. Please try again")
			}

		} catch (error) {
			console.error(error);
			setStatus("An error occurred. Please try again later.");
		}
	}

	return (
		<section className="container py-20">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/3">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<FormControl>
									<Input placeholder="Enter subject" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea className="h-52" placeholder="Enter your message" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
					{status && <p className="mt-2 text-center text-sm text-gray-600">{status}</p>}
				</form>
			</Form>
		</section>
	)
}

export default ContactForm;