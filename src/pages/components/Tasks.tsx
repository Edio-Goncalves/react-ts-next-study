import { useRouter } from "next/router";
import { faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tasks(props: any) {
  const router = useRouter();

  const handleRedirect = (task: any) => {
    router.push({
      pathname: "/description",
      query: {
        title: task.task,
        description: task.description,
      },
    });
  };

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

            <button className="small" onClick={() => handleRedirect(task)}>
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
