import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const handleAddTask = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput === '') return;

    const newTasks = [...tasks, trimmedInput].sort(); // Sort tasks in ascending order
    setTasks(newTasks);
    setInputValue(''); // Clear input field
  };

  // Remove a task
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
