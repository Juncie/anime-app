import Image from 'next/image';
import { Stack } from '@mui/material';
export default function Logo() {
	return (
		<Stack className='flex flex-col items-center justify-center' spacing={2} direction={'column'}>
			<Image src='/LogoIcon.svg' width={60} height={'0'} alt='Logo' />
			<span className='text-3xl font-extrabold'>
				ANI<span className='text-orange-500'>TOONS</span>
			</span>
		</Stack>
	);
}
