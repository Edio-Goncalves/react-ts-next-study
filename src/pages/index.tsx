import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchTasks from "./components/SearchTasks";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />

      <main className="home">
        <h1>Lista de Tarefas</h1>
        <AddTasks />
        <SearchTasks />
        <Tasks />
      </main>

      <Footer />
    </div>
  );
}
