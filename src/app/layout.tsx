import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "Wedding Goosebumps",
  description: "Wedding Goosebumps ",
  // can add more metadata as required
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {children}
</body>
    </html>
  );
}
