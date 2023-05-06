import React from 'react';
import { Stack, Container } from '@mui/material';
import { useState } from 'react';
import { ActionButton } from '@/components/Button/';

const LoginForm = () => {
	let inputClass = 'rounded-sm py-2 pl-2 bg-gray-200 text-gray-800 w-full';
	return (
		<div>
			<form className='w-full flex items-center '>
				<Container className='space-y-10'>
					<Stack spacing={2}>
						<div>
							<label htmlFor='Username'>Username</label>
							<input type='text' id='Username' className={`${inputClass}`} autoComplete='username' />
						</div>
						<div>
							<label htmlFor='Password'>Password</label>
							<input type='password' id='Password' className={`${inputClass}`} autoComplete='current-password' />
						</div>
					</Stack>
					<Stack>
						<ActionButton text='Login' href='/home' />
						<ActionButton text='Sign Up' variant='ghost' />
					</Stack>
				</Container>
			</form>
		</div>
	);
};

export default LoginForm;
