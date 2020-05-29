import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import fetchHelper from './helpers/fetchHelper';
import { act } from 'react-dom/test-utils';

jest.mock("./helpers/fetchHelper");

const dataUrl = "somewhere";
let successfulPromise;

beforeEach(() => { 
  successfulPromise = Promise.resolve({title: "Thread Title", selftext: "", score: 12, selftext: "hi", subreddit_name_prefixed: "r/ah", comments: []});
  fetchHelper.mockReset();
  fetchHelper.mockReturnValue(successfulPromise);
})

test('fetches the data', async () => {
  await act(async() => {
    render(<App dataUrl={dataUrl} />)
    await successfulPromise;
  })

  expect(fetchHelper.mock.calls.length).toBe(1);
  expect(fetchHelper.mock.calls[0]).toEqual([dataUrl]);
})

test('recognizes an error', async () => {
  const rejectedPromise = Promise.reject("error");
  fetchHelper.mockReturnValue(rejectedPromise);
  let getByText;
  await act(async () => {
    getByText = render(<App dataUrl={dataUrl} />).getByText;
    await rejectedPromise.catch(() => { });
  })
  expect(getByText(/Error/i)).toBeInTheDocument();
});

test('renders loading state', async () => {
  const hackedLoadingStatePromise = Promise.resolve(null)
  fetchHelper.mockReturnValue(hackedLoadingStatePromise);
  let getByText;

  await act(async () => {
    getByText = render(<App dataUrl={dataUrl} />).getByText;
    await hackedLoadingStatePromise;
  })

  expect(getByText(/Loading/i)).toBeInTheDocument();
});
