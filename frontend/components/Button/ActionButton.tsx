import Link from 'next/link';
import { useEffect } from 'react';

interface ButtonLinkProps {
	text: String;
	onClick?: () => void;
	variant?: 'fill' | 'outline' | 'ghost';
	href?: string;
}

export default function CustomButton({ text, onClick, variant = 'fill', href }: ButtonLinkProps) {
	// Defines the button style based on the variant prop
	// ! The space before the last quote is important. It concatenates the classes together with a space !
	let btnStyle = 'transition-all duration-200 ';

	// TODO: Add more variants
	switch (variant) {
		case 'fill':
			btnStyle += 'bg-orange-500 text-white hover:bg-orange-600 font-bold py-2 px-4 rounded';
			break;
		case 'outline':
			btnStyle += 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow';
			break;
		case 'ghost':
			btnStyle += 'text-orange-500 hover:text-orange-400 font-semibold py-2 px-4';
			break;
		default:
			btnStyle += 'bg-orange-500 hover:bg-orange-400 font-bold py-2 px-4 rounded';
			break;
	}

	if (href) return <Link href={href} children={text} className={`${btnStyle} text-center`} />;

	return (
		<button onClick={onClick} className={`${btnStyle}`} type='button'>
			{text}
		</button>
	);
}
