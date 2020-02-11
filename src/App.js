import React, { useState } from "react";

import "./App.css";

function ToDo({ toDo, index, completeToDo, removeToDo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}
    >
      {toDo.text}

      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>X</button>
      </div>
    </div>
  );
}

function ToDoForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [toDos, setToDos] = useState([
    {
      text: "Learn data structure using Java",
      isCompleted: false
    },
    {
      text: "Learn react hooks",
      isCompleted: false
    },
    {
      text: "Build cool app with Python django",
      isCompleted: false
    },

    {
      text: "Apply for software developer jobs",
      isCompleted: false
    }
  ]);

  const addToDo = text => {
    const newToDos = [...toDos, { text }];
    setToDos(newToDos);
  };

  const completeToDo = index => {
    const newToDos = [...toDos];
    newToDos[index].isCompleted = true;
    setToDos(newToDos);
  };

  const removeToDo = index => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {toDos.map((toDo, index) => (
          <ToDo
            key={index}
            index={index}
            toDo={toDo}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
          />
        ))}

        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
