import React, { useState } from 'react';
import useList from '../../hooks/useList';

const TaskList = () => {
    const tasks = useList([]);

    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
      <div>
        <h1>Task list</h1>
        <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button type="submit">Create task</button>
        </form>
        { tasks.isEmpty()
        ? (<p>Task list is Empty</p>)
        : (
          <ul>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => tasks.remove(index)}
                  onChange={handleInputChange}
                  checked={false}
                />
                { task }
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default TaskList;
