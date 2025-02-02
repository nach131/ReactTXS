import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './Models/CourseGoal';

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

  function hanleDeleteGoal(id: number) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <main>
        {/* <Header image={{src: goalsImg, alt: "A list of goals"}}> */}
        <Header src={goalsImg} alt="A list of goals">
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGola}>Add Goal</button>
        <CourseGoalList goals={goals} onDeleteGoal={hanleDeleteGoal} />
      </main>
    </>
  );
}

export default App;
