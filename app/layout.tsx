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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
