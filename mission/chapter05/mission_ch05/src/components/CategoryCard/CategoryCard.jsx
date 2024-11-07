import React from 'react';
import {CardDiv, CardSpan} from './CategoryCard.style';

const CategoryCard = ({title})=>{
    return(
        <CardDiv>
            <CardSpan>{title}</CardSpan>
        </CardDiv>
    )

}

export default CategoryCard;