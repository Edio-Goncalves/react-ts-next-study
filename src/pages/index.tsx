import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchTasks from "./components/SearchTasks";
import Tasks from "./components/Tasks";
import list from "../data/list";

export default function Home() {
  const [task, setTask] = useState(list);
  const [isMounted, setIsMounted] = useState(false); // Verifica se está no ambiente do navegador

  useEffect(() => {
    // Isso só roda no lado do cliente
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("task");
      if (savedTasks) {
        setTask(JSON.parse(savedTasks));
      }
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("task", JSON.stringify(task));
    }
  }, [task, isMounted]);

  function onClickTask(taskId: number) {
    const newTasks = task.map((tsk) => {
      if (tsk.id === taskId) {
        return { ...tsk, isComplete: !tsk.isComplete };
      }
      return tsk;
    });

    setTask(newTasks);
  }

  function onClickDelete(taskId: number) {
    const newTasks = task.filter((tsk) => tsk.id !== taskId);
    setTask(newTasks);
  }

  function setTaskValues(title: string, description: string) {
    const newTask = {
      id: Math.floor(Math.random() * 1000000),
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
