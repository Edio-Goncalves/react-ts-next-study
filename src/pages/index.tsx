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

  function setNewTask(title: string, description: string) {
    const newTask: any = {
      id: task.length + 1,
      task: title,
      description: description,
      isComplete: false,
    };
    setTask([...task, newTask]);
  }

  return (
    <div className="wrapper">
      <Header />

      <main className="home">
        <h1>Lista de Tarefas</h1>
        <AddTasks setNewTask={setNewTask} />
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
