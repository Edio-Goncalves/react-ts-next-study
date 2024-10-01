import { useState } from "react";
import list from "../api/list";

export default function Tasks() {
  const [tasks, setTasks] = useState(list);

  return (
    <div className="task-wrapper">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}> {task.task}</li>
        ))}
      </ul>
    </div>
  );
}
