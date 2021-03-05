import React, { ChangeEvent } from 'react';

interface IinputProps {
    inputType: string;
    inputId: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    err?: boolean;
}

const Input = ({
    inputType,
    inputId,
    changeHandler,
    err = false,
}: IinputProps) => {
    return (
        <label htmlFor={inputId}>
            {`${inputId}: `}
            <input
                className={`${
                    err ? 'border-red-400' : 'border-black'
                } border-2 `}
                type={inputType}
                name={inputId}
                id={inputId}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    changeHandler(e)
                }
            />
        </label>
    );
};

export default Input;
