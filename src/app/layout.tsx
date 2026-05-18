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
  metadataBase: new URL("https://mehulai.com"),
  alternates: {
    canonical: "https://mehulai.com",
  },
  openGraph: {
    title: "Mehul — Software Engineer & AI Builder",
    description: "Building AI-powered products that solve real problems.",
    url: "https://mehulai.com",
    siteName: "Mehul",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mehul — Software Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul — Software Engineer & AI Builder",
    description: "Building AI-powered products that solve real problems.",
    images: ["/og-image.svg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mehul",
              url: "https://mehulai.com",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Vanguard",
              },
              alumniOf: [
                { "@type": "EducationalOrganization", name: "Ohio University" },
                { "@type": "EducationalOrganization", name: "Pramukhswami Medical College" },
              ],
              knowsAbout: [
                "Software Engineering",
                "Artificial Intelligence",
                "AWS",
                "Python",
                "TypeScript",
                "Next.js",
                "Full-Stack Development",
              ],
              sameAs: [
                "https://github.com/Mehulpython",
                "https://www.linkedin.com/in/mehul-kanadiya-5b0b09233",
                "https://scholar.google.com/citations?user=fObzCLIAAAAJ",
                "https://x.com/Mehulpython",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
