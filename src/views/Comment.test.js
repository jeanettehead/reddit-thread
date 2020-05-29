import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';
import isCommentDeleted from '../helpers/isCommentDeleted';

jest.mock('../helpers/isCommentDeleted')

const data = {
    author: "Buffy Summers",
    ups: 5,
    downs: 3,
    body: "hi",
    depth: 0,
    created_utc: 0,
    comments: [],
    id: 5,
    onDelete: jest.fn()
}

test('computes score as ups - downs', () => {
    const {getByTestId} = render(<Comment {...data} />);
    expect(getByTestId("score").textContent).toContain("2");
})

test('does not show delete button for deleted comments', () => {
    isCommentDeleted.mockReturnValue(true);

    const {queryAllByTestId} = render(<Comment {...data}  />);

    expect(queryAllByTestId("deleteComment").length).toBe(0);
});