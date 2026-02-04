import "./globals.css";
import { Poppins, Roboto } from "next/font/google";

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
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}


