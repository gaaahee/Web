import React from 'react';
import './CastCard.css';

const CastCard = (props) =>{
  const {cast} = props;
  return(
      <>
          <div className="cast_card_box">
              <div className="profile_box">
              <img className='profile_img' 
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}/></div>
              <span>{cast.name}</span>
              <p>{cast.character}</p>
          </div>
      </>
  )
}

export default CastCard;