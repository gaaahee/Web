import { useParams } from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail';
import MovieList from './MovieList/MovieList';

const MovieRoute = ()=>{
  const {id} = useParams(); // 카테고리 또는 영화의 ID를 가져옴
  const isNumber = /^\d+$/.test(id);
  // ^\d+$ 는 숫자만 포함되어 있는지 확인하는 정규 표현식
  // 모든 문자가 숫자일 때만 true 반환
  return isNumber ? <MovieDetail movieId ={id}/>
                  : <MovieList category ={id}/>
}

export default MovieRoute;