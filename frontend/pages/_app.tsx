import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${montserrat.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
