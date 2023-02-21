import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ImageShow from "./ImageShow";

test('if image exixts, if it has alt attribute', ()=>{
    // dummy image object
    const imageData = {
        urls: {
            small: "https://"
        },
        alt_description: "obrazek"
    }
    
    render(<ImageShow image={imageData} />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt');

})