import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="administrator website for La Ventana mobile app"
        />
        <meta name="author: armando" content="La-Ventana" />
        <title>La Ventana</title>
        <link rel="icon" href="/images/la-ventana/icon32.ico" />
      </head>
      <body className="bg-ventana-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
