import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-sky-300 space-y-4 p-6 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) {
            return alert("Preencha o Título da tarefa");
          }
          if (!description.trim()) {
            return alert("Preencha a Descrição da tarefa");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-sky-500 text-sky-100 px-4 py-2 rounded-md font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
