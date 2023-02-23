import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageList from "./ImageList";


function renderComponent(){
    const images = [
        {id:1,
         
            urls: {
                small: "https://"
            },
            alt_description: "obrazek"
        } ,

        {id:2, 
        urls: {
            small: "https://"
        },
        alt_description: "obrazek"
    },

        {id:3, 
        urls: {
            small: "https://"
        },
        alt_description: "obrazek"
    } ,

    ];



     render(<ImageList images={images}/>) ;
}

test('render all images  from received array', ()=>{
    renderComponent();

    const image = screen.getAllByRole('img');

    expect(image).toHaveLength(3);


})