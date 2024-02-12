import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import sha512 from 'crypto-js/sha512';
import Cookies from 'js-cookie';
import RegisterUserPresenter from './presenter';
import {
  RegisterUserAPIParamType,
  RegisterUserAPIresponseType,
  UserInfoType,
} from './types';
import { axios } from '../../../lib/axios';

/**
 * 新規ユーザー登録画面
 *
 * @returns コンポーネント
 */
const RegisterUserContainer = () => {
  const navigate = useNavigate();
  const [canSeePassword, setCanSeePassword] = useState({
    password: false,
    confirmationPassword: false,
  });
  const [serverError, setServerError] = useState('');
  const { handleSubmit, control, getValues } = useForm<UserInfoType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmationPassword: '',
    },
  });
  /** ユーザー登録API実行 */
  const registerUser = async ({
    username,
    email,
    password,
  }: RegisterUserAPIParamType) => {
    const hashedPassword = sha512(password).toString();
    try {
      const { data } = await axios.post<RegisterUserAPIresponseType>(
        '/account',
        {
          username,
          email,
          password: hashedPassword,
        }
      );
      Cookies.set('sessionId', data.sessionId, { expires: 7 });
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        setServerError(error.message);
      }
    }
  };
  const showPassword = (param: 'password' | 'confirmationPassword') => {
    if (param === 'password') {
      setCanSeePassword((prev) => ({
        password: !prev.password,
        confirmationPassword: prev.confirmationPassword,
      }));
    } else {
      setCanSeePassword((prev) => ({
        password: prev.password,
        confirmationPassword: !prev.confirmationPassword,
      }));
    }
  };
  const props = {
    handleSubmit,
    registerUser,
    control,
    getValues,
    canSeePassword,
    showPassword,
    serverError,
  };
  return <RegisterUserPresenter {...props} />;
};

export default RegisterUserContainer;
