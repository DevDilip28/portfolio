import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dilip Asdeo — Full-Stack & GenAI Engineer",
  description:
    "Portfolio of Dilip Asdeo: full-stack developer building web applications, backend systems, RAG products, and agentic AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade bg-grid opacity-[0.35]" />
        {children}
      </body>
    </html>
  );
}
