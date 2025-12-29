// import { Inter, Poppins } from "next/font/google";
// import "./globals.css";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-inter",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-poppins",
// });

// export const metadata = {
//   metadataBase: new URL("https://musk-appliance.vercel.app/"), // ✅ change to real domain
//   title: {
//     default: "Digital Aircon | AC Repair & Installation Services",
//     template: "%s | Digital Aircon",
//   },
//   description:
//     "Digital Aircon provides professional AC repair, installation, servicing, and maintenance in Navi Mumbai and Mumbai.",
//   keywords: [
//     "AC repair Navi Mumbai",
//     "AC installation Mumbai",
//     "Digital Aircon",
//     "Split AC service",
//     "Window AC repair",
//   ],
//   authors: [{ name: "Digital Aircon" }],
//   openGraph: {
//     title: "Digital Aircon",
//     description:
//       "Trusted AC repair, servicing & installation experts in Navi Mumbai.",
//     url: "https://musk-appliance.vercel.app/",
//     siteName: "Digital Aircon",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         suppressHydrationWarning
//         className={`${inter.variable} ${poppins.variable} antialiased`}
//       >
//         {/* <Navbar /> */}
//         {children}
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap", // ✅ SEO & performance
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://musk-appliance.vercel.app"),

  title: {
    default: "Digital Aircon | AC Repair & Installation Services in Mumbai",
    template: "%s | Digital Aircon",
  },

  description:
    "Digital Aircon offers expert AC repair, installation, servicing & maintenance in Mumbai and Navi Mumbai. Fast, affordable & trusted service.",

  keywords: [
    "AC repair Mumbai",
    "AC repair Navi Mumbai",
    "AC installation Mumbai",
    "Split AC service",
    "Window AC repair",
    "AC servicing near me",
    "Digital Aircon",
  ],

  authors: [{ name: "Digital Aircon" }],

  alternates: {
    canonical: "https://musk-appliance.vercel.app/",
  },

  openGraph: {
    title: "Digital Aircon – Trusted AC Repair Services",
    description:
      "Professional AC repair, servicing & installation experts in Mumbai & Navi Mumbai.",
    url: "https://musk-appliance.vercel.app/",
    siteName: "Digital Aircon",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Aircon – AC Repair Services",
    description:
      "Expert AC repair & installation services in Mumbai & Navi Mumbai.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
