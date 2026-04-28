import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehul — Software Engineer & AI Builder",
  description: "Personal portfolio of Mehul — Software Engineer at Vanguard, building AI-powered products. Projects include AgentDeal, NexaFlow, and more.",
  keywords: ["Mehul", "Software Engineer", "AI", "Portfolio", "AgentDeal", "NexaFlow"],
  openGraph: {
    title: "Mehul — Software Engineer & AI Builder",
    description: "Building AI-powered products that solve real problems.",
    url: "https://mehulai.com",
    siteName: "MehulAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul — Software Engineer & AI Builder",
    description: "Building AI-powered products that solve real problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
