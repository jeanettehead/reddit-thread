import React from 'react';
import { render } from '@testing-library/react';
import Thread from './Thread';

const data = {
    subreddit_name_prefixed: "chocolate",
    selftext: "is delicious",
    score: 5,
    title: "dark chocolate",
    comments: [{
        author: "Buffy Summers"
    }]
}

test('renders a thread', () => {

    const { getByText } = render(<Thread {...data} />);

    expect(getByText(/dark chocolate/i)).toBeInTheDocument();
})

test('renders comments', () => {
    const { getByText } = render(<Thread {...data} />);

    expect(getByText(/dark chocolate/i)).toBeInTheDocument();
})