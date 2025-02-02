import { type ReactNode } from 'react';
import { type CourseGoal as CGoal } from '../Models/CourseGoal';
import CourseGoal from './CourseGoal';
import InfoBox from './infoBox';

type Props = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

let warningBox: ReactNode;

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No tienes nada...!!!</InfoBox>;
  }
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Tienes muchas cosas.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
