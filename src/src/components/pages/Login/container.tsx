import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import sha512 from 'crypto-js/sha512';
import Cookies from 'js-cookie';
import LoginPresenter from './presenter';
import {
  LoginAPIParamType,
  LoginAPIResponseType,
  LoginFormValueType,
} from './types';
import { axios } from '../../../lib/axios';

/**
 * ログイン画面
 *
 * @returns コンポーネント
 */
const LoginContainer = () => {
  const navigate = useNavigate();
  const [canSeePassword, setCanSeePassword] = useState(false);
  const [serverError, setServerError] = useState('');
  const { handleSubmit, control } = useForm<LoginFormValueType>({
    defaultValues: {
      username: '',
      password: '',
      rememberPassword: false,
    },
  });
  /** ログインAPI実行 */
  const login = async ({
    username,
    password,
    rememberPassword,
  }: LoginAPIParamType) => {
    // ! 認証周りのロジックについては後日対応する。
    const hashedPassword = sha512(password).toString();
    try {
      const { data } = await axios.post<LoginAPIResponseType>('login', {
        username,
        password: hashedPassword,
        rememberPassword,
      });
      if (data.sessionId) {
        Cookies.set('sessionId', data.sessionId, { expires: 7 });
      }
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setServerError(error.message);
      }
    }
  };
  const showPassword = () => {
    setCanSeePassword((prev) => !prev);
  };
  const props = {
    handleSubmit,
    login,
    control,
    canSeePassword,
    showPassword,
    serverError,
  };
  return <LoginPresenter {...props} />;
};

export default LoginContainer;
