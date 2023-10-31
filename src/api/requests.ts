import { useQuery } from "react-query"
import games from '../data/games.json'

const get = async () => {
    const response = await fetch('url/destination');
    const gamesData = await response.json();

    return gamesData.results;
}

const getGames = () => {
    return useQuery({
        queryKey: ['games', ],
        queryFn: () =>
            get(),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {result: games.results}
    })
}

export default getGames;