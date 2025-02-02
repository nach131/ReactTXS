import CourseGoal from "./components/CourseGoal"
import Header from "./components/Header"
import goalsImg from './assets/goals.jpg'
import { useState } from "react"


type CourseGoal = {
  title: string;
  description:string;
  id:number;
}

function App() {

const [goals, setGoals]=  useState<CourseGoal[]>([]);

  function handleAddGola(){

  }

  return (
    <>
      <main>
          {/* <Header image={{src: goalsImg, alt: "A list of goals"}}> */}
          <Header src={goalsImg} alt="A list of goals">
             <h1>Your Course Goals</h1>
          </Header>
          <button onClick={handleAddGola}>Add Goal</button>
          <CourseGoal
        title="Esto es el titulo"
        >
          Descripcion desde children
        </CourseGoal>
      </main>
    </>
  )
}

export default App
