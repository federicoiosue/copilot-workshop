// FILE: src/App.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/Notes', () => () => <div>Notes Component</div>);
jest.mock('./pages/CreateNote', () => () => <div>CreateNote Component</div>);
jest.mock('./pages/EditNote', () => () => <div>EditNote Component</div>);

describe('App', () => {
  test('renders Notes component for the default route', () => {
    render(
        <App />
    );
    expect(screen.getByText('Notes Component')).toBeInTheDocument();
  });
});