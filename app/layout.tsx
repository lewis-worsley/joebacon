import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSans = localFont({
  src: "./fonts/OpenSans.woff",
  variable: "--font-open-sans",
});

const merriweatherSans = localFont({
  src: "./fonts/MerriweatherSans.woff",
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "Joe Bacon Consulting: UK Marketing & Communications Services",
  description: "Experienced Marketing & Communications Consultant in the UK, helping businesses elevate their brand, engage audiences, and achieve measurable results.",
  icons: { 
    icon: '/favicon.jpg',
    apple: '/icons/touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${merriweatherSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
