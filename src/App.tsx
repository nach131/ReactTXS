import Input from './components/Input';
import { useRef } from 'react';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Form>
        <Input id="text" label="Name" type="text" ref={input} />
        <Input id="number" label="Age" type="number" ref={input} />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
