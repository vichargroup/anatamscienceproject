import "./globals.css";

export const metadata = {
  title: "Anantam Science Exhibition",
  description: "Powered by Vichar Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

