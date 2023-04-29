import { useState } from 'react';
import { Stack, Container } from '@mui/material';
import Logo from '@/components/Logo';
import LoginForm from './_loginForm';

const LoginPage = () => {
	return (
		<Container maxWidth='sm' className='h-screen flex items-center flex-col justify-center'>
			<Stack className='w-full' spacing={5}>
				<div>
					<Logo />
					<p className='text-center text-gray-500 font-semibold capitalize my-2'>All your anime and manga in one great place</p>
				</div>
				<LoginForm />
			</Stack>
		</Container>
	);
};

export default LoginPage;
