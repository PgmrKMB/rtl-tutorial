import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe('<Counter />' , ()=>{
    it('has a number and two buttons', ()=>{
        const utils = render(<Counter/>);
        utils.getByText(/0/);
        utils.getByText('+1');
        utils.getByText('-1');

    })

    it('increases', ()=>{
        const utils = render(<Counter/>);
        const number = utils.getByText('0');
        const plusButton = utils.getByText('+1');

        //클릭이벤트 처리
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);
        expect(number).toHaveTextContent('2');
        // expect(number.textContent).toBe('2');
    })
    
    it('increases', ()=>{
        const utils = render(<Counter/>);
        const number = utils.getByText('0');
        const minusButton = utils.getByText('-1');

        //클릭이벤트 처리
        fireEvent.click(minusButton);
        fireEvent.click(minusButton);
        expect(number).toHaveTextContent('-2');
        // expect(number.textContent).toBe('-2');
    })
})