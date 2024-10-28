import localFont from "next/font/local";
import Providers from "./_providers";
import { Toaster } from "sonner";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Starter app 🚀",
  description: "Starter app 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster position='top-right' />
      </body>
    </html>
  );
}