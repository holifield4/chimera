import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter();

export const metadata: Metadata = {
  title: "Holifield William",
  description: "Assessment Test",
  authors: [{ name: "Holifield William", url: 'https://holifield.vercel.app/' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
