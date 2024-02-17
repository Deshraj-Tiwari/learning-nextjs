import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deshraj NEXT app",
  description: "Learning NEXT js using this project",
  author: "Deshraj Tiwari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-slate-900 text-white container mx-auto p-3 sticky mt-20 bottom-0 text-center border-4 border-green-600">
          Copyright 2024 Deshraj Tiwari
        </footer>
      </body>
    </html>
  );
}
