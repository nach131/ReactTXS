import { PropsWithChildren, type ReactNode } from "react";

// ===== las dos formas son buedas ===

// interface CourseGoal {
//   title: string;
//   children:ReactNode
// }

type CourseGoal = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoal) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
