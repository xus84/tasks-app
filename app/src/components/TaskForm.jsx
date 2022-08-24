import React from "react";
import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write your Task"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Write the description for the task"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>SAVE</button>
    </form>
  );
};
