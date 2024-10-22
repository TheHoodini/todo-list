import { useState, useEffect } from 'react';
import { AddTask } from './components/AddTask';
import { Task } from './components/Task';

export function App() {
  // Initialize tasks from localStorage, or set an empty array if there's no data
  const [tasks, setTasks] = useState<string[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
  };

  // Function to delete a task by index
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='bg-indigo-200 h-screen'>
      <div className="flex items-center justify-center h-full">

        {/* Scrollable White Box */}
        <div className="bg-white py-5 px-8 rounded-lg shadow-lg w-1/2 h-3/4 overflow-y-auto">

          {/* Contenido */}
          <h2 className="text-center text-xl font-bold">To-Do List</h2>
          <br />
          <p className="">Task</p>
          <AddTask addTask={addTask} />

          {/* Render Tasks */}
          {tasks.map((task, index) => (
            <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
          ))}

        </div>

      </div>
    </div>
  );
}
