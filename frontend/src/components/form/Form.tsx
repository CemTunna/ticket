import React from 'react';
import FormItem from './FormItem';
interface Props {
  formItems: any;
  onSubmit: (e: any) => void;
  others: any;
}
const Form = ({ onSubmit, formItems, others }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      {formItems.map((item: any) => (
        <FormItem item={item} key={item.id} />
      ))}
      {others}
    </form>
  );
};

export default Form;
