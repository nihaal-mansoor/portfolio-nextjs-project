import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

const generalSans = localFont({
  src: [
    {
      path: './fonts/GeneralSans-Bold.otf',
      weight: '800',
      style: 'normal'
    },{
      path: './fonts/GeneralSans-Semibold.otf',
      weight: '700',
      style: 'normal'
    },{
      path: './fonts/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal'
    },{
      path: './fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal'
    },{
      path: './fonts/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal'
    },{
      path: './fonts/GeneralSans-Extralight.otf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-general-sans'
})

export const metadata: Metadata = {
  title: "Next Demo App",
  description: "Next App - Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}