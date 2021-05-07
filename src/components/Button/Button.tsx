import React from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
    className: string;
    disabled: boolean;
    size: ButtonSize;
    btnType: ButtonType;
    children: React.ReactNode;
    href: string;
    onClickHandler: () => void;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
    const {btnType = "default", disabled = false, size, children, className, href, onClickHandler, ...restProps} = props;

    const classes = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === "link" && disabled,
    });
    if (btnType === "link" && href) {
        return (
            <a {...restProps} href={href} className={classes}>
                {children}
            </a>
        );
    } else {
        return (
            <button {...restProps} className={classes} disabled={disabled} onClick={onClickHandler}>
                Button
            </button>
        );
    }
};

// Button.defaultProps = {
//     disabled: false,
//     btnType: "default",
// };
export default Button;
