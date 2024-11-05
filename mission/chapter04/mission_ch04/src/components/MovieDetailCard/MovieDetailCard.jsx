import './MovieDetailCard.css'

const MovieDetailCard = (props) =>{
    const { detail } = props;
    return(
        <>  
            <div className="poster_box">
                <img className = "poster_img" 
                src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}/>
                <div className="detail_box">
                    <h1>{detail?.title}</h1>
                    <span>{`평균 ${detail?.vote_average}`}</span>
                    <span>{detail?.release_date}</span>
                    <span>{`${detail?.runtime}분`}</span>
                    <p className='tagline'>{detail?.tagline}</p>
                    <p className="overview">{detail?.overview}</p>
                </div>
            </div>
        </>
    )
}

export default MovieDetailCard;