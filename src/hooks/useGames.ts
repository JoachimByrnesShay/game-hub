

import { GameQuery } from "../App";
import useData from "./useData";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
    // rating: number;
  }

  const useGames = (gameQuery: GameQuery)=>useData<Game>("/games", 
    {params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }}, 
    [gameQuery]);

  export default useGames;
  
  // interface FetchGamesResponse {
  //   count: number;
  //   results: Game[];
  // }
// const useGames = () => {
//     const [games, setGames] = useState<
//     Game[]
//   >([]);

//   const [error, setError] =
//     useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {

//     const controller = new AbortController();
//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", {signal: controller.signal})
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) =>{
//         if (err instanceof CanceledError) return ;
//         setError(err.message);
//         setGames([])
//         setIsLoading(false);
//       }

//       );
//       // .finally(()=>setIsLoading(false));
//       return ()=> controller.abort();
//   },[]);

//   return {games, error, isLoading};
// }

