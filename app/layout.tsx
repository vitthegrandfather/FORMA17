import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "FORMA/17 — Ideas made inevitable",
    description: "Creative direction, identity systems and digital experiences for culture-led studios and brands.",
    openGraph: {
      title: "FORMA/17 — Form with intent",
      description: "Ideas made inevitable. Kyiv / Worldwide.",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FORMA/17 — Form with intent",
      description: "Ideas made inevitable. Kyiv / Worldwide.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
