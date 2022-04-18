import { Input } from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("check Function", () => {
    it("is a function", () => {
        expect(Input).toBeInstanceOf(Function);
    });
});

describe("check rendered",() => {
    beforeEach(() => {
      render(<Input />);
      
    });

    it("render input field", () => {
        const el = screen.getByRole("textbox");
        expect(el).toBeInTheDocument();
   });
   
   it("text present",() => {
        const el = screen.getByRole("textbox");
        fireEvent.change(el, {target: {value: "abc"}});
        expect(screen.getByDisplayValue("abc")).toBeTruthy();
   }); 
});


