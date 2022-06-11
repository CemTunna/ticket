import { useState } from 'react';
import { toast } from 'react-toastify';

const useForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = form;
  const onChange = (e: any) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    }
  };
  return {
    form,
    setForm,
    onChange,
    onSubmit,
  };
};

export default useForm;
