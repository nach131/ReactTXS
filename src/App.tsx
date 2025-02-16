import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);

  function handlerSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log('extractedData', extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handlerSave} ref={customForm}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
