import styled from "styled-components";

const CategoryCard = ({title})=>{
    return(
        <CardDiv>
            <CardSpan>{title}</CardSpan>
        </CardDiv>
    )

}

export default CategoryCard;

const CardDiv = styled.div`
    width : 200px;
    height : 100px;
    background-color : white;
    border-radius: 10px;
    display : flex;
    align-items : flex-end;
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); 
    }
`
const CardSpan = styled.span`
    background-color: grey;
    color: white;
    opacity: 0.5;
    border-radius: 5px;
    margin :10px 10px 10px 10px;
    padding : 0px 3px 3px 3px;
    vertical-align : bottom;
`