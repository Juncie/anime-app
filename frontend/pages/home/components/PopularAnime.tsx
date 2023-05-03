import AnimeList from '@/components/Lists/AnimeLists';
import mapAnime from '@/functions/_mapAnime';

interface Props { data: any, title: string}

export default function PopularAnimeList({ data, title }: Props): JSX.Element {
	let mappedAnime = mapAnime(data);
	return <AnimeList title={title} children={mappedAnime} />;
}

