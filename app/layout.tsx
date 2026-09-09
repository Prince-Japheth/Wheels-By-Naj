import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RentQ - Car Rental",
  description: "Tailwind Car Rental Template",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/flaticon_rentq.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/scrollCue.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}

        <Script src="/assets/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/scrollCue.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/fslightbox.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
