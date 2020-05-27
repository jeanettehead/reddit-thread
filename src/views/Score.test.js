import React from 'react';
import { render } from '@testing-library/react';
import Score from './Score';

test('renders whole score when less than 1000', () => {
    const { getByTestId } = render(<Score score={5} />);

    expect(getByTestId("score").textContent).toContain("5")
})

test('renders ks of score when greater than 1000', () => {
    const { getByTestId } = render(<Score score={5403} />);

    expect(getByTestId("score").textContent).toContain("5.4k")
})

test('rounds the score properly', () => {
    const { getByTestId } = render(<Score score={4444888} />);

    expect(getByTestId("score").textContent).toContain("4444.9k")
})