import React from "react";
import useCustomFetch from "../../../hooks/useCustomFetch";
import {MovieListContainer, StyledLink} from "./MovieList.style";
import MovieCard from "../../../components/MovieCard/MovieCard";

const APIurl={
  "now_playing" : 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1',
  "popular" : 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
  "top_rated" : 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', 
  "upcoming" :'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1'
}

const MovieList = (props) => {
  const { category } = props;
  const { data: movies, isLoading, isError } = useCustomFetch(APIurl[category]);

  if(isLoading){
    return <div>로딩중 입니다...</div>;
  }
  if(isError){
    return <div>에러 발생</div>;
  }
  //console.log(movies.results);
  return (
    <>
      <MovieListContainer>
        {movies.results?.map((movie) => (
          <StyledLink key={movie.id} to={`../movies/${movie.id}`} >
            <MovieCard poster_path={movie.poster_path} 
                        title = {movie.title} 
                        release_date = {movie.release_date}
            />
          </StyledLink>
        ))}
      </MovieListContainer>
    </>
  )

}

export default MovieList;