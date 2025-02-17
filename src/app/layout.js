import { Gaegu } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gaegu.className} >
        {children}
      </body>
    </html>
  );
};