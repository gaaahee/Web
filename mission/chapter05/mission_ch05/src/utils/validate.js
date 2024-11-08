// 입력받은 email, password 값에 따라 유효성 검사 수행
import React from 'react';

// @ 앞 : 이메일의 사용자명이 영어 대소문자, 숫자
// @ 뒤 : 도메인 이름이 영어 대소문자, 숫자
// . 뒤 : 도메인 확장자가 영어 대소문자이고 최소 2자리 이상
const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;


function validateUser(values){
  const errors = {
    email: '',
    password: ''
  }

  if(emailPattern.test(values.email) === false){
    errors.email = '이메일 형식이 올바르지 않습니다. 다시 확인해주세요!';
  }

  if(values.password.length < 8 || values.password.length > 16){
    errors.password = '비밀번호는 8 ~ 16자 사이로 입력해주세요!';
  }

  return errors;
}

function validateLogin(values){
  return validateUser(values);
}

export {validateLogin};