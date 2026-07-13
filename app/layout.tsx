import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBorder from "@/components/PageBorder";

export const metadata: Metadata = {
  title: "Sophia Li",
  description: "Personal website of Sophia Li — CS + Economics at Brown University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageBorder />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
