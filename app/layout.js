import "./globals.css";

export const metadata = {
  title: "Market Breadth Dashboard",
  description:
    "Track Fear & Greed Index, Advance–Decline Line, and other market breadth indicators to help traders and investors make smarter decisions.",
  keywords: [
    "market breadth",
    "fear and greed index",
    "advance decline line",
    "stock market indicators",
    "trading sentiment",
    "investing tools",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    title: "Market Breadth Dashboard",
    description:
      "Live Fear & Greed Index and Advance–Decline Line for smarter trading decisions.",
    url: "https://yourdomain.com",
    siteName: "Market Breadth Dashboard",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Market Breadth Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Breadth Dashboard",
    description:
      "Live Fear & Greed Index and Advance–Decline Line for smarter trading decisions.",
    creator: "@yourtwitter", // optional
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
