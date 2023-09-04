"use client";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Watfa Linktree</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favpng.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
