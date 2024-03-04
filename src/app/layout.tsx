'use client'
import Footer from "@/app/components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeContextProvider } from "@/lib/context";
import "./globals.css";


import Container from "./components/ui/Container";

// Replace "@/path/to/theme-context" with the actual path to the module.

const inter = Poppins({weight: ["400", "500", "600", "700"], subsets: ["latin"]});


 const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <ThemeContextProvider >
    <Container>
   
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className= {`${inter.className} w-full flex flex-col mx-auto  bg-light-on-primary-surface dark:bg-dark-on-primary-surface text-light-primary dark:text-dark-primary `} >
    

        <div className="min-h-screen">{children}</div>
        
      </body>
    </Container>
    </ThemeContextProvider>
   
  );
}
