import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";


import "./globals.css";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlinks",
  description: "A next generation web app for customizing and saving your links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
