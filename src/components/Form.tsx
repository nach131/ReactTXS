import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name');
    const data = Object.fromEntries(formData);
    onSave(data);

    console.log('name:', name);
    console.log('data:', data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
