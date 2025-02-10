import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spotify = localfont({
  src:'./fonts/SpotifyMix-Bold.woff2',
  weight: '100 900'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moktener - Your favourite url shortener",
  description: "This app will allow you to shorten your urls with no effort ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spotify.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
