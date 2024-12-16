import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css";
import Navbar from './components/Navbar'
import NavbarCubeContainer from './components/NavbarCubeContainer'

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} font-['Blogger_Sans'] font-light antialiased bg-gray-900`}
      >
        <NavbarCubeContainer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
