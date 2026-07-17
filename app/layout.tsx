import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: ".HS — Hugo Sergio · Software Engineer",
  description:
    "Hugo Sergio — Software Engineer com 4 anos de experiência. Java, Spring Boot, React, Node.js, TypeScript, Python, .NET, AWS, Azure, GCP, Docker & Linux.",
  authors: [{ name: "Hugo Sergio" }],
  icons: {
    icon: "/assets/favicon.svg",
  },
  openGraph: {
    title: "Hugo Sergio — Software Engineer",
    description:
      "Building software that ships. 4 years crafting solutions across retail & construction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg font-sans text-base leading-[1.55] text-ink">
        {children}
      </body>
    </html>
  );
}
