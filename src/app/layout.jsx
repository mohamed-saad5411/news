'use client'
import { Geist, Geist_Mono } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import BootstrapClient from "./_layout/bootstrap/BootstrapClient";
import Navbar from "./_layout/navbar/page";
import Footer from "./_layout/footer/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>News</title>
      <body>
        <Navbar/>
        {children}
        <BootstrapClient/>
        <Footer/>
      </body>
    </html>
  );
}
