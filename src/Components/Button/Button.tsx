import React, { MouseEvent } from 'react';

interface IButtonProps {
    buttonText: string;
    clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ buttonText, clickHandler }: IButtonProps) => {
    return (
        <button
            className="p-2 border border-main-yellow w-3/4 rounded-md bg-main-dark text-main-yellow hover:bg-main-light"
            type="submit"
            onClick={(e) => clickHandler(e)}
        >
            {buttonText}
        </button>
    );
};

export default Button;
