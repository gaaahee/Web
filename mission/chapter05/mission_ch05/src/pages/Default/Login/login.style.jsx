import styled from 'styled-components';

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; // 로그인 영역을 화면 상단에 배치
  height: 100vh;
  padding-top: 10vh;
  background-color: #000;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding : 40px;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;

  // error가 발생하면 테두리 색을 빨간색으로 변경
  border: ${props => props.error ? 
  '2px solid red' : '1px solid #ccc'};

  &:focus { // input 창에 focus 되면 입력창의 테두리 색 변경
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #ff4d6d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff2f4e;
  }
`;

export const ErrorText = styled.h1`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;