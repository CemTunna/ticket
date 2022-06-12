import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../state/hooks';
import { loginRequest, registerStart } from '../state/features/auth/authSlice';
const useForm = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword, name, email } = form;
  const onChange = (e: any) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    // register
    if (
      name.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      const data = {
        name,
        email,
        password,
        confirmPassword,
      };
      dispatch(registerStart(data));
    }
    // login
    // if (
    //   password.length > 0 &&
    //   email.length > 0 &&
    //   name.length === 0 &&
    //   confirmPassword.length === 0
    // ) {
    //   const data = {
    //     email,
    //     password,
    //   };
    //   dispatch(loginRequest(data));
    // }

    // if () {
    //   toast.error("Passwords don't match");
    // } else {
    //   const data=
    //
    // }
  };
  return {
    form,
    setForm,
    onChange,
    onSubmit,
  };
};

export default useForm;
