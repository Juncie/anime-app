import React from 'react';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export default function App() {
	return (
		<>
			<div>APP HOME SCREEN</div>
		</>
	);
}
