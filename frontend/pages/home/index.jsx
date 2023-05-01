import { Stack, Card, CardMedia, CardContent, Typography, Container, Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import UserAvatar from '@/components/Avatar/Avatar';
import VideoCard from '@/components/Cards/VideoCard';
import truncate from '@/functions/truncate';
import {PopularAnimeList} from '@/components/Lists/AnimeLists';


export async function getServerSideProps(context){
	let action = 'popular'
	let id = 'attack-on-titan'
	const res = await axios.get(`https://api.enime.moe/${action}`);
	const data = res.data.data;
	console.log('data',data)
	return { props: { data }};
}



export default function HomePage({data}){
	
	const [results, setResults] = useState([{}]);
	useEffect(() => setResults(data), [data])

	const resultsList = () => {
		return (
			<>
					{results.map((show, i) => (
						<VideoCard 
							key={i} 
							title={show.title?.english} 
							image={show.coverImage}/>
					))}
			</>
		)
	}


	return (
		<>
			<Container maxWidth={'md'} >
				<Box>
					<Stack spacing={2}>
					
					<PopularAnimeList>
						{resultsList()}
					</PopularAnimeList>
					<PopularAnimeList>
						{resultsList()}
					</PopularAnimeList>
					
					</Stack>
				</Box>
			</Container>
		</>
	);
}


