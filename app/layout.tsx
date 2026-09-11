import type { Metadata } from 'next';
import { Geist, Newsreader } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://inw-2027.fuzzy-coin-5253.chatgpt.site'),
  title: 'INW 2027 — Italian Networking Workshop',
  description: 'The 23rd Italian Networking Workshop, 19–21 January 2027 at Hotel Carlo Magno in Madonna di Campiglio, Italy.',
  openGraph: { title: 'INW 2027 — Italian Networking Workshop', description: '19–21 January 2027 · Madonna di Campiglio, Italy', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'INW 2027 — Italian Networking Workshop', description: '19–21 January 2027 · Madonna di Campiglio, Italy', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${newsreader.variable}`}>{children}</body></html>;
}
