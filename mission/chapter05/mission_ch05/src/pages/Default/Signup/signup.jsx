import React from 'react';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import * as S from './signup.style';

const Signup = () => {
    const schema = yup.object().shape({
      email: yup
      .string()
      .email('유효한 이메일 형식이어야 합니다.')
      .required(
        '이메일을 반드시 입력해주세요.'
      ),
      password: yup
      .string()
      .min(
        8, 
        '비밀번호는 8자 이상이어야 합니다.'
      ).max(16,
        '비밀번호는 16자 이하여야 합니다.'
      ).required(
          '비밀번호를 입력해주세요.'
      ),
      passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        '비밀번호가 일치하지 않습니다.'
      )
      .required(
        '비밀번호 확인은 필수 입력사항입니다.'
      )
    });

    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      watch,
  } = useForm({
      resolver: yupResolver(schema),
      mode: 'onChange'
  });

  const onSubmit = (data) => {
      console.log('폼 데이터 제출');
      console.log(data);
  };

  // password 필드의 값이 존재하고 에러가 없으면 true
  const passwordValue = watch('password');
  const isPasswordValid = passwordValue && !errors.password;

  return (
    <S.SignupBox>
      <S.SignupContainer 
        onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입</h1>
        <S.Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register('email')}
          $error={errors.email}
        />
        <S.ErrorText>{errors.email?.message}</S.ErrorText>

        <S.Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register('password')}
          $error={errors.password}
        />
        <S.ErrorText>{errors.password?.message}</S.ErrorText>

        <S.Input
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요!"
          {...register('passwordConfirm')}
          $error={errors.passwordConfirm}
          disabled={!isPasswordValid}
        />
        <S.ErrorText>{errors.passwordConfirm?.message}</S.ErrorText>

        <S.Button type="submit" disabled={!isValid}>
          제출
        </S.Button>
      </S.SignupContainer>
    </S.SignupBox>
  );
};

export default Signup;