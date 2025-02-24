import { Gaegu, Rubik_Dirt } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-gaegu'
});

export const rubikDirt = Rubik_Dirt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik-dirt'
});

export const metadata = {
  title: "Costa Eu-rica",
  description: "Test your knowledge in this fun, interactive quiz about Costa Rica's famous animals.",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gaegu.variable} ${rubikDirt.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-2S30ZRZ2ZB" />
    </html>
  );
};