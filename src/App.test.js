import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import fetchHelper from './helpers/fetchHelper';

jest.mock("./helpers/fetchHelper");

const dataUrl = "somewhere";

beforeEach(() => {
  fetchHelper.mockReset();
  fetchHelper.mockReturnValue({title: "Thread Title"});
})

test('fetches the data', () => {
  render(<App dataUrl={dataUrl} />);

  expect(fetchHelper.mock.calls.length).toBe(1);
  expect(fetchHelper.mock.calls[0]).toEqual([dataUrl]);
})

test('recognizes an error', () => {
  fetchHelper.mockImplementation(() =>{ throw "MAJOR ERROR" });

  const { getByText } = render(<App dataUrl={dataUrl} />);

  expect(getByText(/Error/i)).toBeInTheDocument();
});

test('renders a thread', () => {
  const { getByText } = render(<App dataUrl={dataUrl} />);

  expect(getByText(/Thread Title/i)).toBeInTheDocument();
})

