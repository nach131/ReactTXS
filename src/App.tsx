import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGola() {
    setGoals((prev) => {
      const newGols: CourseGoal = {
        id: Math.random(),
        title: 'Learn react',
        description: ' descripcion de learn',
      };
      return [...prev, newGols];
    });
  }

  return (
    <>
      <main>
        {/* <Header image={{src: goalsImg, alt: "A list of goals"}}> */}
        <Header src={goalsImg} alt="A list of goals">
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGola}>Add Goal</button>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
