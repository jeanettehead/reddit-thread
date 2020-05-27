
import React from 'react';
import { render } from '@testing-library/react';
import ParagraphView from './ParagraphView';


test('renders each paragraph', () => {
    const paragraph = "one\ntwo\n\nfour\n\nfive\n\n\nnine";
    const {queryAllByTestId} = render(<ParagraphView paragraph={paragraph}/>);
    expect(queryAllByTestId("paragraph").length).toEqual(9);
})