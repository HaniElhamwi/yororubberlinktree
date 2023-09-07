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
        <title>Yororubber Linktree</title>
        <meta
          name="description"
          content="Explore YoroRubber's Linktree - Your Gateway to High-Quality Car Parts and Automotive Solutions. Discover our wide range of products and services for various makes and models."
        />
        <link rel="icon" href="/favpng.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
