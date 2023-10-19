import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RegisterUserPresenter from './presenter';
import { UserInfoType } from './types';

/**
 * 新規ユーザー登録画面
 *
 * @returns コンポーネント
 */
const RegisterUserContainer = () => {
  const [canSeePassword, setCanSeePassword] = useState({
    password: false,
    confirmationPassword: false,
  });
  const { handleSubmit, control, getValues } = useForm<UserInfoType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmationPassword: '',
    },
  });
  /** ユーザー登録API実行 */
  const registerUser = ({ username, email, password }: UserInfoType) => {
    console.log(username, email, password);
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
  };
  return <RegisterUserPresenter {...props} />;
};

export default RegisterUserContainer;
