import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, subject, message } = body;

		if (!email || !subject || !message) {
			return new Response(
				JSON.stringify({ error: "All fields are required" }),
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			host: "smtp.ionos.co.uk",
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions: {
			from: string;
			to: string;
			replyTo: string;
			subject: string;
			text: string;
		} = {
			from: "noreply@joebaconconsulting.com",
			to: process.env.EMAIL_USER as string,
			replyTo: email,
			subject,
			text: `Message from: ${email}\n\n${message}`,
		};

		await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ success: "Email sent successfully" }),
			{ status: 200 }
		);
	} catch (error: any) {
		console.error("Error sending email:", error);
		return new Response(
			JSON.stringify({ error: "Failed to send email" }),
			{ status: 500 }
		);
	}
}
