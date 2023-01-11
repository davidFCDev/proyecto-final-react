/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import TaskList from './TaskList';

// 0 - Renderiza el componente
test('0 - Renderiza el componente', () => {
    const r = render(<TaskList />);
    expect(r).toBeDefined();
});
