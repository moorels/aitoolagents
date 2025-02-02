import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css";
import Navbar from './components/Navbar'
import NavbarCubeContainer from './components/NavbarCubeContainer'
import Footer from './components/Footer'
import { generateHomeMetadata } from './metadata-config';
import { AuthProvider } from './contexts/AuthContext';
import Providers from './providers';
import StyledComponentsRegistry from './registry';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...generateHomeMetadata(),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistMono.variable} font-['Blogger_Sans'] font-light antialiased bg-gray-900 min-h-full overflow-x-hidden`}
      >
        <StyledComponentsRegistry>
          <AuthProvider>
            <Providers>
              <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarCubeContainer />
                <Navbar />
              </div>
              <main className="pt-24 min-h-screen">{children}</main>
              <Footer />
            </Providers>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
