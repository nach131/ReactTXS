import { type CourseGoal as CGoal } from '../Models/CourseGoal';
import CourseGoal from './CourseGoal';

type Props = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              {goal.description}`
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
