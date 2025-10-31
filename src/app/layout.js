import "../styles/globals.scss";
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


export const metadata = {
  title: "Farms For Sale",
  description: "A real-estate pecializing in farms, wildlife estates, small holdings, and rental properties across Gauteng Province, South Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
