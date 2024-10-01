import { faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tasks(props: any) {
  console.log(props.task);
  return (
    <div className="task-wrapper">
      <ul>
        {props.task.map((task: any) => (
          <li key={task.id}>
            <button
              className={`${task.isComplete && "complete"}`}
              onClick={() => props.onClickTask(task.id)}
            >
              {task.task}
            </button>

            <button className="small">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>

            <button
              className="small"
              onClick={() => props.onClickDelete(task.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
