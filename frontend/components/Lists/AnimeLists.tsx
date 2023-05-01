import { Box, ImageList, Stack } from '@mui/material';

interface Props {
	children: any;
}
function PopularAnimeList({ children }: Props) {
	return (
		<Box>
			<h5 className='mb-5'>Popular Shows</h5>
			<ImageList rowHeight={'auto'} gap={10} className='rounded-md overflow-x-scroll w-screen no-scrollbar'>
				<Box>
					<Stack direction='row' spacing={1.3}>
						{children}
					</Stack>
				</Box>
			</ImageList>
		</Box>
	);
}

export { PopularAnimeList };
