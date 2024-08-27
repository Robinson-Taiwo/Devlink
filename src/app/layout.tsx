import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

import "./globals.css";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlinks",
  description:
    "DevLinks App: Streamline your link sharing, customization, and organization. This powerful tool, designed for developers and content creators, lets you easily customize and edit links, track clicks, and enhance your online presence. Built by Omoyeni Taiwo Samuel (Oluwarotimi_ )",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
