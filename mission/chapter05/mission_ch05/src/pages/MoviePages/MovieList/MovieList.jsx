import React from "react";
import { Link } from "react-router-dom";
import useCustomFetch from "../../../hooks/useCustomFetch";
import {MovieListContainer} from "./MovieList.style";
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
  //console.log("Fetched URL:", APIurl[category]);
  if(isLoading){
    return <div>로딩중 입니다...</div>;
  }
  if(isError){
    return <div>에러 발생</div>;
  }

  return (
    <>
      <MovieListContainer>
        {movies.data?.results.map((movie) => (
          <Link to={`../movies/${movie.id}`} key={movie.id}>
            <MovieCard poster_path={movie.poster_path} 
                        title = {movie.title} 
                        release_date = {movie.release_date}/>
          </Link>
        ))}
      </MovieListContainer>
    </>
  )

}

export default MovieList;