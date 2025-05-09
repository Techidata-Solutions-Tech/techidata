import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../../src/components/ScrollWrapper";
import Footer from "./components/Footer";
import Navbar from "../sections/HomePage/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"]
});

// moved metadata inside the function (JS doesn't support `export const metadata` easily)
const metadata = {
  title: "Techidata Landing Page",
  description: "Directed by Raj",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-black relative`}
      >
        <Navbar />

        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
