import { useState } from "react";

export default function AddTasks(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescriptio] = useState("");

  return (
    <div className="addTasks-wrapper">
      <input
        type="text"
        placeholder="Digite a tarefa"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descroção da tarefa"
        value={description}
        onChange={(evt) => setDescriptio(evt.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }

          props.setNewTask(title, description);
          setTitle("");
          setDescriptio("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
