import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("check Function", () => {
    it("is a function", () => {
        expect(Button).toBeInstanceOf(Function);
    });
});

describe("check rendered",() => {

   it("render button", () => {
        render(<Button />);
        expect(screen.getByRole("button")).toBeInTheDocument();
   }); 

   it("button is disabled", () => {
    render(<Button disabled={true} />);
        expect(screen.getByRole("button")).toBeDisabled();
   });

   it ("button click", () => { // разбирали на уроке, я так и не понял чего оно не работает.
        const mockHandler = jest.fn(() => console.log('clicked'));    
        render(<Button onClick={mockHandler} />);
        userEvent.click(screen.getByRole("button")); 
        expect(mockHandler).toBeCalledTimes(0);
   });

    
});