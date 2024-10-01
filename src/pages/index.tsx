import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchTasks from "./components/SearchTasks";
import Tasks from "./components/Tasks";
import list from "../data/list";

export default function Home() {
  const [task, setTask] = useState(list);

  function onClickTask(taskId: number) {
    const newTasks: any = task.map((tsk) => {
      if (tsk.id === taskId) {
        return { ...tsk, isComplete: !tsk.isComplete };
      }
      return tsk;
    });

    setTask(newTasks);
  }

  function onClickDelete(taskId: number) {
    const newTasks: any = task.filter((tsk) => tsk.id !== taskId);
    setTask(newTasks);
  }

  function setTaskValues(title: string, description: string) {
    const newTask = {
      id: task.length + 1,
      task: title,
      description,
      isComplete: false,
    };

    setTask([...task, newTask]);
  }

  return (
    <div className="wrapper">
      <Header />

      <main className="home">
        <h1>Lista de Tarefas</h1>
        <AddTasks setTaskValues={setTaskValues} />
        <SearchTasks />
        <Tasks
          task={task}
          onClickTask={onClickTask}
          onClickDelete={onClickDelete}
        />
      </main>

      <Footer />
    </div>
  );
}
