import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Holifield William",
  description: "Assessment Test",
  authors: [
    { name: "Holifield William", url: "https://holifield.vercel.app/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen h-screen max-h-screen overflow-hidden">
          <NavBar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
