import type { Metadata } from "next";
// import { Courier} from 'next/font/google'
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Frastio Agustian | Software Engineer",
  description: "i make random things.",
  openGraph: {
    title: "Frastio Agustian | Software Engineer",
    description: "i make random things.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
