import { Stack, Card, CardMedia, CardContent, Typography, Container, Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import UserAvatar from '@/components/Avatar/Avatar';
import VideoCard from '@/components/Cards/VideoCard';

import PopularAnimeList from './components/PopularAnime'
import { getPopular, getRecent } from '@/services/data/getAnime';
import mapAnime from '@/functions/_mapAnime';
import RecentAnimeList from './components/RecentShows';


export default function HomePage(props){
	const { PopularShows, RecentShows } = props;


	return (
		<>
			<Container maxWidth='md' >
				<Box>
					<Stack spacing={5}>
					<PopularAnimeList data={PopularShows} title='Popular'/>
					<RecentAnimeList data={RecentShows} title='Recent'/>
					</Stack>
				</Box>
			</Container>
		</>
	);
}


export async function getServerSideProps(context){
	// Request popular anime
	const { data: PopularShows } = 
		await getPopular().then((res) => res.data);
	
	// Request Recent Anime
	const { data: RecentShows } =
		await getRecent().then((res) => res.data);
	
	return { props: { PopularShows, RecentShows }};
}
