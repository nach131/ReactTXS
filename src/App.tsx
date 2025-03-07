import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './Models/CourseGoal';
import NewGoal from './components/NewGoal';

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prev) => {
      const newGols: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
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
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={hanleDeleteGoal} />
      </main>
    </>
  );
}

export default App;
