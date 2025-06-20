// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Lownav from "../components/Lownav";
import Upnav from "../components/Upnav";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personified B2B Marketing",
  description: "Personified is a B2B marketing agency that specializes in creating personalized marketing strategies for businesses. We help you connect with your audience through tailored content and innovative solutions.",
  icons: {
    icon: "/favicon.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <Upnav/>
       <Lownav/>

        {/* Page content */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
