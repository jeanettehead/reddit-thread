import React from 'react';
import { render, fireEvent, findAllByTestId } from '@testing-library/react';
import Thread from './Thread';
import { act } from 'react-dom/test-utils';

const data = {
    subreddit_name_prefixed: "chocolate",
    selftext: "is delicious",
    score: 5,
    title: "dark chocolate",
    comments: []
};

test('renders a thread', () => {
    const { getByText } = render(<Thread {...data} />);

    expect(getByText(/dark chocolate/i)).toBeInTheDocument();
});

test('deleting a comment', () => {
    const comments = [{
        id: 1,
        author: "Buffy Summers",
        ups: 5,
        downs: 3,
        body: "hi",
        depth: 0,
        created_utc: 0,
        comments: []
    }];

    const { getByTestId } = render(<Thread {...data} {...{comments}} />);

    act(() => {
        fireEvent.click(getByTestId("deleteComment"));
    });

    expect(getByTestId("commentAuthor").textContent).toContain("[deleted]");
});
