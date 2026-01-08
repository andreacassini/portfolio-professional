import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Scene3D from "@/components/Scene3D";
import TopLoader from "@/components/TopLoader";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Andrea Cassini - Full Stack Developer",
  description: "Portfolio di Andrea Cassini, Full Stack Developer specializzato in React, Laravel e design system innovativi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <TopLoader />
        <Scene3D />
        <Navigation />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
