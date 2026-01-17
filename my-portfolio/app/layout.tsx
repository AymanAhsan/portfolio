import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/Navbar"

// Optimize Inter font with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
