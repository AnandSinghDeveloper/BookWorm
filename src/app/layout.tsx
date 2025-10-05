import "./globals.css";
import { DM_Sans, Funnel_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-funnel-display",
});

export const metadata = {
  title: "Bookworm App",
  description: "Your ultimate online reading companion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.className} ${funnelDisplay.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
