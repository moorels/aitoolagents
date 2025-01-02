import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css";
import Navbar from './components/Navbar'
import NavbarCubeContainer from './components/NavbarCubeContainer'
import Footer from './components/Footer'
import { generateHomeMetadata } from './metadata-config';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateHomeMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistMono.variable} font-['Blogger_Sans'] font-light antialiased bg-black min-h-full overflow-x-hidden`}
      >
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavbarCubeContainer />
          <Navbar />
        </div>
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
