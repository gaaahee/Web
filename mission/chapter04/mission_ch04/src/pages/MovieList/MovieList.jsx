import React from "react";
import { Link } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieCard from "../../components/MovieCard/MovieCard";

const APIurl={
  "now-playing" : '/movie/now_playing?language=ko-KR&page=1',
  "popular" : '/movie/popular?language=ko-KR&page=1',
  "top-rated" : '/movie/top_rated?language=ko-KR&page=1', 
  "up-coming" :'/movie/upcoming?language=ko-KR&page=1'
}

const MovieList = (url) => {
  const { category } = url;

  const { data: movies, isLoading, isError } = useCustomFetch(APIurl[category]);
  if(isLoading){
    return <div>로딩중 입니다...</div>;
  }
  if(isError){
    return <div>에러 발생</div>;
  }

  return (
    <>
      <div className="movie_poster_list">
        {movies.data?.results.map((movie) => (
          <Link to={`../movies/${movie.id}`} key={movie.id}>
            <MovieCard poster_path={movie.poster_path} 
                        title = {movie.title} 
                        release_date = {movie.release_date}/>
          </Link>
        ))}
      </div>
    </>
  )

}

export default MovieList;