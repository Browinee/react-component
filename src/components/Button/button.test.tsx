import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Button, {ButtonProps} from "./Button";

const defaultProps = {
    onClick: jest.fn(),
};

const testProps: ButtonProps = {
    btnType: "primary",
    size: "lg",
    className: "klass",
};

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
};
describe("Button component", () => {
    it("should render the correct default button", () => {
        const {getByText} = render(<Button {...defaultProps}>Button</Button>);
        const element = getByText("Button") as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass("btn btn-default");
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it("should render the correct component based on different props", () => {
        const {getByText} = render(<Button {...testProps}>Button</Button>);
        const element = getByText("Button");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("btn-primary btn-lg klass");
    });
    it("should render a link when btnType equals link and href is provided", () => {
        const {getByText} = render(
            <Button btnType="link" href="testurl">
                Link
            </Button>
        );
        const element = getByText("Link");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("A");
        expect(element).toHaveClass("btn btn-link");
    });
    it("should render disabled button when disabled set to true", () => {
        const {getByText} = render(<Button {...disabledProps}>Button</Button>);
        const element = getByText("Button") as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
