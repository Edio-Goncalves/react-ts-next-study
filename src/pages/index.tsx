import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchTasks from "./components/SearchTasks";
import Tasks from "./components/Tasks";
import list from "./api/list";

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

  return (
    <div className="wrapper">
      <Header />

      <main className="home">
        <h1>Lista de Tarefas</h1>
        <AddTasks />
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
