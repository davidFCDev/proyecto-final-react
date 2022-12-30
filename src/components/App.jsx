import React from 'react';
import Counter from './Counter';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';

/**
 *
 * @returns Componente principal de nuestra aplicación
 */
const App = () => {
    return (
      <div>
        {/* <TaskList />
        <Settings /> */}
        <Counter />
      </div>
    );
};

export default App;
