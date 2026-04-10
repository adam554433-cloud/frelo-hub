import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "frelo Hub — Your Command Center",
  description: "One dashboard for every frelo app, asset, and idea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
