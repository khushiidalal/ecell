import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "E-Summit '26 | E-Cell NSUT Dwarka New Delhi",
  description: "North India's flagship collegiate entrepreneurship conclave by E-Cell NSUT. ₹12.5L+ prize pool, Shark Tank pitch battles, 48-hr hackathon, and VC investor summits.",
  keywords: "E-Summit NSUT, E-Cell NSUT, Netaji Subhas University of Technology, Entrepreneurship Summit 2026, Startup Vault, Ideathon 2026, NSUT Dwarka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#07080a] text-slate-100 selection:bg-[#00f59b] selection:text-[#07080a]">
        {children}
      </body>
    </html>
  );
}
