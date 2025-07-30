import "./globals.css";
import { Geologica } from "next/font/google";
import { Inter } from 'next/font/google'

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-geologica",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})


export const metadata = {
  title: "Studio Laura Sessa",
  description: "Best Luxury Interiors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geologica.variable} ${geologica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
