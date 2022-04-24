import { Input } from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("check Function", () => {
    it("is a function", () => {
        expect(Input).toBeInstanceOf(Function);
    });
});

describe("check rendered",() => {
   it("render input field", () => {
        render(<Input />);
        const el = screen.getByRole("textbox");
        expect(el).toBeInTheDocument();
   });
   
   it("text present",() => {
        render(<Input />);    
        const el = screen.getByRole("textbox");
        fireEvent.change(el, {target: {value: "abc"}});
        expect(screen.getByDisplayValue("abc")).toBeTruthy();
   }); 
});


