import { Box, ImageList, Stack } from '@mui/material';

interface Props { children: any, title: string}

export default function AnimeList({ children, title }: Props) {
	return (
		<Box>
			<h5 className='mb-5'>{title}</h5>
			<ImageList 
				gap={10} 
				rowHeight='auto' 
				className='rounded-md overflow-x-scroll w-screen no-scrollbar'>

				<Box>
					<Stack direction='row' spacing={1.3} children={children} />
				</Box>
			</ImageList>
		</Box>
	);
}


