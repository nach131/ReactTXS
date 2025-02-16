import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  function handlerSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log('extractedData', extractedData);
  }
  return (
    <main>
      <Form onSave={handlerSave}>
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
