import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rickysun2006.github.io"),
  title: "Ruqi Sun",
  description:
    "Undergraduate researcher at SUSTech working on human-AI interaction and information visualization.",
  keywords: [
    "Ruqi Sun",
    "Ricky Sun",
    "孙如琦",
    "Human-AI Interaction",
    "Information Visualization",
    "SUSTech",
    "HCI",
  ],
  authors: [{ name: "Ruqi Sun", url: "https://rickysun2006.github.io" }],
  creator: "Ruqi Sun",
  openGraph: {
    title: "Ruqi Sun",
    description:
      "Undergraduate researcher at SUSTech working on human-AI interaction and information visualization.",
    url: "https://rickysun2006.github.io",
    siteName: "Ruqi Sun",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ruqi Sun",
    description:
      "Undergraduate researcher at SUSTech working on human-AI interaction and information visualization.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
