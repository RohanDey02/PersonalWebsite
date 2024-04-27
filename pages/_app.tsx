import '../styles/global.css';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <Component {...pageProps} />
  </div>
}
