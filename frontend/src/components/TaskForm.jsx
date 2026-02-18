import { useState } from "react";
import API from "../lib/axios";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const createTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={createTask} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
