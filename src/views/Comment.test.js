import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';

const data = {
    author: "Buffy Summers",
    ups: 5,
    downs: 3,
    body_html: "hi",
    depth: 0,
    created_utc: 0
}

test('computes score as ups - downs', () => {
    const {getByTestId} = render(<Comment {...data} />);
    expect(getByTestId("score").textContent).toContain("2");
})