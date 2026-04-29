import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehul — Software Engineer & AI Builder",
  description:
    "Personal portfolio of Mehul — Software Engineer at Vanguard, building AI-powered products. Projects include AgentDeal, NexaFlow, AgentCupid, and more.",
  keywords: [
    "Mehul",
    "Software Engineer",
    "AI",
    "Portfolio",
    "AgentDeal",
    "NexaFlow",
    "AgentCupid",
    "Full-Stack Developer",
  ],
  metadataBase: new URL("https://mehul.ai"),
  openGraph: {
    title: "Mehul — Software Engineer & AI Builder",
    description: "Building AI-powered products that solve real problems.",
    url: "https://mehul.ai",
    siteName: "Mehul",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
