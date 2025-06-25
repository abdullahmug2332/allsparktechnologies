import GlobalPreloader from "@/components/GlobalPreloader";
import Script from "next/script";

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/nprogress.css";
import { Toaster } from "sonner";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AllSpark Technologies</title>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <meta
          name="google-site-verification"
          content="G1uaovu8fDlyB3-5phzFHMeTubsdrU5pyZmKLe4l7FA"
        />
        {/* JSON-LD Schema */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7PCVCQV0ZX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7PCVCQV0ZX');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rppd5k13y0");
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T96MJWT5');
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T96MJWT5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GlobalPreloader />
        {children}
        <Toaster position="bottom-right" className="bg-[#384BFF] text-white" />
      </body>
    </html>
  );
}
