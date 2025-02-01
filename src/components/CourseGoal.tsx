import { PropsWithChildren, type ReactNode } from "react";

// ===== las dos formas son buedas ===

// interface CourseGoal {
//   title: string;
//   children:ReactNode
// }

type CourseGoal = PropsWithChildren<{title:string}>

export default function CourseGoal({ title, children }: CourseGoal) {
  return (
    <article>
      <div>
        <h2>
          {title}
        </h2>
        <p>
          {children}
        </p>
      </div>
      <button>Delete</button>
    </article>
  );
}
