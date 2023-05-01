import axios from 'axios';
import { useEffect, useState } from 'react';

const [anime, setAnime] = useState([]);

let config = {
	method: 'get',
	maxBodyLength: Infinity,
	url: 'https://api.consumet.org/anime/enime/demon-slayer',
	headers: {},
};

axios
	.request(config)
	.then(response => {
		console.log(JSON.stringify(response.data));
	})
	.catch(error => {
		console.log(error);
	});
