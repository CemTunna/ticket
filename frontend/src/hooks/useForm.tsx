import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { loginStart, registerStart } from '../state/features/auth/authSlice';
import { createTicketStart } from '../state/features/ticketSlice';
import { ClientTicket } from '../interfaces/Ticket';
const useForm = () => {
  const dispatch = useAppDispatch();

  const { isError, isLoading, isSuccess, msg, user } = useAppSelector(
    (state) => state.auth
  );

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [ticketFormData, setTicketFormData] = useState<ClientTicket>({
    issue: '',
    description: '',
  });

  const { password, confirmPassword, name, email } = form;

  const onChange = (e: any) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onTicketChange = (e: any) => {
    setTicketFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
    if (
      password.length > 0 &&
      email.length > 0 &&
      name.length === 0 &&
      confirmPassword.length === 0
    ) {
      const data = {
        email,
        password,
      };
      dispatch(loginStart(data));
    }
    // Ticket sending
    const { description, issue } = ticketFormData;

    if (description.length > 0 && issue.length > 0 && user.token.length > 0) {
      const { token } = user;
      token && dispatch(createTicketStart({ ticketFormData, token }));
    }
  };
  return {
    form,
    setForm,
    onTicketChange,
    ticketFormData,
    onChange,
    onSubmit,
    isError,
    isLoading,
    isSuccess,
    msg,
    user,
  };
};

export default useForm;
