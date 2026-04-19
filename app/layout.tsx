import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gofamintpsogba.org.ng"),
  title: {
    default: "GOFAMINT Pacesetters Assembly, Ogba, Ikeja, Lagos",
    template: "%s | GOFAMINT Pacesetters Assembly",
  },
  description:
    "The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly, Ogba, Ikeja, Lagos. Worship services, pastor's messages, media, and contact information.",
  keywords: [
    "The Gospel Faith Mission International",
    "Gospel Faith Mission",
    "GOFAMINT",
    "GOFAMINT Lagos",
    "GOFAMINT Ikeja",
    "GOFAMINT Ogba",
    "church in Ogba",
    "church in Ikeja",
    "Pentecostal church Lagos",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://gofamintpsogba.org.ng/",
    siteName: "GOFAMINT Pacesetters Assembly",
    title: "GOFAMINT Pacesetters Assembly, Ogba, Ikeja, Lagos",
    description:
      "Worship with us at GOFAMINT Pacesetters Assembly in Ogba, Ikeja, Lagos and have a wonderful experience in the presence of God",
    locale: "en_NG",
    images: [
      {
        url: "/images/bgroundHome.jpg",
        width: 1200,
        height: 630,
        alt: "GOFAMINT Pacesetters Assembly Ogba Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOFAMINT Pacesetters Assembly, Ogba, Ikeja, Lagos",
    description:
      "The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly, Ogba, Ikeja, Lagos.",
    images: ["/images/bgroundHome.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "GOFAMINT Pacesetters Assembly",
    alternateName: [
      "The Gospel Faith Mission International Pacesetters Assembly",
      "GOFAMINT Ogba",
      "GOFAMINT Ikeja",
    ],
    url: "https://gofamintpsogba.org.ng/",
    logo: "https://gofamintpsogba.org.ng/images/gofamintLogo.png",
    image: "https://gofamintpsogba.org.ng/images/bgroundHome.jpg",
    email: "mail@gofamintpsogba.org.ng",
    telephone: "+2348034088120",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ogba",
      addressLocality: "Ikeja",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    areaServed: ["Ogba", "Ikeja", "Lagos"],
    sameAs: [
      "https://www.facebook.com/profile.php?id=100083487785406",
      "https://instagram.com",
      "https://www.google.com/maps/place/GOFAMINT+PACESETTERS,+OGBA,+IKEJA+LAGOS/@6.6390215,3.3292248,17z/data=!3m1!4b1!4m6!3m5!1s0x103b93e8cca0dd7d:0x596e77e2296ced9c!8m2!3d6.6390215!4d3.3292248!16s%2Fg%2F11cp5df86d?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1 w-full min-w-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
