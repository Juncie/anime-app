import { ImageListItem, ImageListItemBar } from '@mui/material';

interface Props {
	title?: string;
	image?: string;
	subtitle?: string;
	id?: any;
}

export default function VideoCard({ title, image, subtitle, id}: Props) {
	return (
		<>
			<ImageListItem key={id} sx={{ minHeight: 200, minWidth: 200 }} className='cursor-pointer'>
				<img src={image} alt={title} className='rounded-md flex-1 aspect-square object-center' />
				<ImageListItemBar title={title} position='bottom' subtitle={subtitle} sx={{ titleWrap: 'wrap' }} />
			</ImageListItem>
		</>
	);
}
