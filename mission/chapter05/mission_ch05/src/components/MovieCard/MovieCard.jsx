import "./movieCard.css"

const MovieCard = (props)=>{
    const {poster_path, title, release_date} = props
    return (
        <div className='movie_item'>
          <img className='poster_img' 
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
          <span>{title}</span>
          <p>{release_date}</p>
          <div className='poster_hover'/>
        </div>
      )
}

export default MovieCard;