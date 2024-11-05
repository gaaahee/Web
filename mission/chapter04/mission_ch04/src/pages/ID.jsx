import { useParams } from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail';
import MovieList from './MovieList/MovieList';

const ID = ()=>{
  const {categoryOrMovieId} = useParams();
  const isNumber = /^\d+$/.test(categoryOrMovieId);
  return isNumber ? <MovieDetail movieId ={categoryOrMovieId} />
                  : <MovieList category ={categoryOrMovieId}/>
}

export default ID;