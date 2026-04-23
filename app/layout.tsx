import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babas Turf | Prime Booking System",
  description: "Enterprise-grade turf management and scheduling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
    }

