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
  title: "Joe Bacon Marketing & Communications Consultancy",
  description: "Affordable marketing and communication services for small and medium-sized enterprises",
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
