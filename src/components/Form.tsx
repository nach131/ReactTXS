import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

// para ponder tener la funcion el componente padre
export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  //   los metodos que se quieren ejecutar en el padre del componente
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING');
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name');
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();

    console.log('name:', name);
    console.log('data:', data);
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
