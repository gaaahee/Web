import CastCard from "../../../components/castCard/castCard";
import MovieDetailCard from "../../../components/MovieDetailCard/MovieDetailCard";
import useCustomFetch from "../../../hooks/useCustomFetch";
import './MovieDetail.css'

const MovieDetail = (props)=>{
    const {movieId} = props;
    //console.log(movieId);
    const { data : detail, isDetailLoading, isDetailError} = 
    useCustomFetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`);
    
    const { data : movie, isCastLoading, isCastError } = 
    useCustomFetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`);
    //console.log(detail);

    if(isDetailLoading || isCastLoading){
        return<div>로딩중 입니다...</div>
    }
    if(isDetailError || isCastError){
        return<div>에러 발생</div>
    }
    return(
        <>  
            <div className="entire_box">
                <MovieDetailCard detail = {detail}/>
                <div className="casting">
                    <h2>감독/출연</h2>
                    <div className="cast_list">
                        {movie?.cast?.length > 0 ? ( // movie.cast가 존재하면 movie.cast 값을 순회하여 CastCard 컴포넌트로 전달
                            movie.cast.map((cast) => (
                                <CastCard key={cast.id} cast={cast} />
                            ))
                        ) : ( <p>출연 정보가 없습니다.</p> )}
                    </div> 
                </div>
            </div>
        </>
    )
}

export default MovieDetail;