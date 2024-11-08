import React from 'react';
import * as L from './login.style';
import { useForm } from '../../../hooks/use-form';
import { validateLogin } from '../../../utils/validate';

const Login = () => {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin
  });

  // console.log(login.getTextInputProps);
  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  }

  return (
    <L.LoginBox>
      <L.LoginContainer>
        <h1>로그인</h1>
        <L.Input error={login.touched.email && login.errors.email}
        type={'email'} 
        placeholder={'이메일을 입력해주세요!'} 
        {...login.getTextInputProps('email')}/>
        
        {login.touched.email && login.errors.email 
        && <L.ErrorText>{login.errors.email}</L.ErrorText>}

        <L.Input error={login.touched.password && login.errors.password}
        type={'password'} 
        placeholder={'비밀번호를 입력해주세요!'} 
        {...login.getTextInputProps('password')}/>
        
        <L.Button onClick={handlePressLogin}>로그인</L.Button>
      </L.LoginContainer>
    </L.LoginBox>
  );
};

export default Login;