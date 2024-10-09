// styled-component 실습
import './App.css'
import CustomButton from './components/custom-button.jsx';
import styled from 'styled-components';

// color props가 전달되지 않은 경우 purple로 기본 설정되도록 함(or 연산자)
const FirstStyledSweetPotato = styled.button`
    background-color: ${props => props.color || 'purple'};
    border: none;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    color: white;
`
// const StyledDivComponent = styled.div`
//   // ... 생략
// `

function App() {
  return (
    <>
      <CustomButton/>
      <FirstStyledSweetPotato color = {'purple'}>
          고구마
      </FirstStyledSweetPotato>
      <FirstStyledSweetPotato color = {'red'}>
          고구마
      </FirstStyledSweetPotato>
    </>    
  )
}

export default App