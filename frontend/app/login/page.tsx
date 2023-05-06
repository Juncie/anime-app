'use client';
import { Stack, Container, Box } from '@mui/material';
import Image from 'next/image';
import { createElement, useContext, useRef, Fragment } from 'react'
import LoginForm from './_loginForm';
import Logo from '@/components/Logo';
import  AppleIcon from '/public/Apple.svg';
import  GoogleIcon from '/public/Google.svg';
import  FacebookIcon from '/public/Facebook.svg';

export default function LoginPage() {
	return (
		<Container maxWidth='sm' className='h-screen flex items-center flex-col justify-center space-y-5'>
			<Stack className='w-full pb-5' spacing={1}>
				<div>
					<Logo />
					<p className='text-center text-gray-500 font-semibold capitalize my-2'>All your anime and manga in one great place</p>
				</div>
				<LoginForm />
			</Stack>
			<span>- Or Sign In Using -</span>
			<Stack className='pb-5' direction='row' spacing={2}>
				<div className='bg-gray-100 rounded-full p-5 '>
					<Image alt='Google' src={GoogleIcon} width={30} />
				</div>
				<div className='bg-[#252836] rounded-full p-5 '>
					<Image alt='Apple' src={AppleIcon} width={30} />
				</div>
				<div className='bg-[#4267B2] rounded-full p-5 '>
					<Image alt='Facebook' src={FacebookIcon} width={30} />
				</div>
			</Stack>
		</Container>
	);
};


