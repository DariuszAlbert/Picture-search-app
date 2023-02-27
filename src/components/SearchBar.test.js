import {screen, render, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import user from '@testing-library/user-event';
import SearchBar from './SearchBar';

test('if input exixts', () =>{
    render(<SearchBar />);

    const input = screen.getByRole('textbox', {name: /enter search term/i});
    const label = screen.getByText('Enter Search Term');
   
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();

});

test('calls onSubmit when the form is submitted',  ()=>{

    const mock = jest.fn();

    render(<SearchBar onSubmit={mock}/>);

    const input = screen.getByRole('textbox', {name: /enter search/i});

    const form = screen.getByRole('search');

    user.click(input)
    user.keyboard('samolot');

    user.keyboard(`{Enter}`);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith('samolot');

});

test('check if input is set to empty string after submition', async ()=>{
    render(<SearchBar onSubmit={ () => {} }/>);

    const input = screen.getByRole('textbox');

    user.click(input);
    user.keyboard('samolot');
    user.keyboard(`{Enter}`);

    await waitFor( () => {expect(input).toHaveValue('')} );

});