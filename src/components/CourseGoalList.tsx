import { type CourseGoal as CGoal } from '../Models/CourseGoal';
import CourseGoal from './CourseGoal';

type Props = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: Props) {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>{goal.description}`</CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
