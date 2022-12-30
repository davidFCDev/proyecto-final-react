import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const timer = useCounter(0);
    return (
      <div>
        Contador:
        { timer }
      </div>
    );
};

export default Counter;
