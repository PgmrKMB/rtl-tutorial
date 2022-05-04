import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile/>", ()=>{
    it('shows the props currectly', ()=>{
        const utils = render(<Profile username="kmb" name="😊😊😊"/>);

        utils.getByText('kmb');

        utils.getByText(/😊/);

    })

    function abc() {

    }
    it('matches snapshot', ()=>{
        const utils = render(<Profile username="kmb" name="😊😊😊"/> );
        expect(utils.container).toMatchSnapshot();

    })

})