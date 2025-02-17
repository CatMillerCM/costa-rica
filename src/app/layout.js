import { Hi_Melody } from "next/font/google";
import "./globals.css";

const hiMelody = Hi_Melody({
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={hiMelody.className} >
        {children}
      </body>
    </html>
  );
};