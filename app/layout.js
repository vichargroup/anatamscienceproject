// import "./globals.css";
// import { Poppins, Roboto } from "next/font/google";

// export const metadata = {
//   title: "Anantam Science Exhibition",
//   description: "Powered by Vichar Group",
// };

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["600", "700", "800"],
//   variable: "--font-poppins",
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-roboto",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${poppins.variable} ${roboto.variable}`}
//     >
//       <body className="antialiased font-body">
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: "Anantam Science Exhibition",
  description: "Powered by Vichar Group",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable}`}
    >
      {/* ✅ Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LHN5XWP');
          `,
        }}
      />

      {/* ✅ Facebook Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25246829531601638');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* ✅ Service Worker Registration */}
      <Script
        id="progressive-scoring-sw"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw-progressive-scoring.js')
                  .then(function(registration) {
                    console.log('✅ Service Worker registered:', registration.scope);
                  })
                  .catch(function(error) {
                    console.warn('⚠️ Service Worker registration failed:', error);
                  });
              });
            }
          `,
        }}
      />

      <body className="antialiased font-body">
        
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LHN5XWP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Facebook Pixel (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25246829531601638&ev=PageView&noscript=1"
            alt="meta-pixel"
          />
        </noscript>

        {children}

      </body>
    </html>
  );
}