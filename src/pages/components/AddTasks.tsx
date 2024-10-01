import { useState } from "react";

export default function AddTasks(props: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="addTasks-wrapper">
      <input
        type="text"
        placeholder="Digite a tarefa"
        value={title}
        onChange={(vl) => setTitle(vl.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descroção da tarefa"
        value={description}
        onChange={(vl) => setDescription(vl.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha os campos de tarefa e descrição.");
            return;
          }
          props.setTaskValues(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
