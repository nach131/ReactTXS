import Input from './components/Input';
import { useRef } from 'react';

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="Test" label="Test" type="text" ref={input} />
    </main>
  );
}

export default App;
