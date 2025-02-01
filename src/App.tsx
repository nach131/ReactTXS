import CourseGoal from "./components/CourseGoal"

function App() {

  return (
    <>
      <main>
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
