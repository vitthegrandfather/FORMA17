import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vitthegrandfather.github.io/FORMA17/"),
  title: "FORMA/17 — Ideas made inevitable",
  description: "Creative direction, identity systems and digital experiences for culture-led studios and brands.",
  openGraph: {
    title: "FORMA/17 — Form with intent",
    description: "Ideas made inevitable. Kyiv / Worldwide.",
    type: "website",
    images: [{ url: "https://vitthegrandfather.github.io/FORMA17/og.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMA/17 — Form with intent",
    description: "Ideas made inevitable. Kyiv / Worldwide.",
    images: ["https://vitthegrandfather.github.io/FORMA17/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
