// import { Montserrat } from "next/font/google";
// import Providers from "./providers";
import "./globals.css";

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

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
      {/* <body className={montserrat.className}> */}
        {/* <Providers>{children}</Providers> */}
        <body>
          {children}
      </body>
    </html>
  );
};