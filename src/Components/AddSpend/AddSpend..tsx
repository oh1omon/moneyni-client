import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { addSpend } from '../../dispatchers/spendsDispatcher';

interface IFormObject {
    category?: string;
    comment?: string;
    cost?: number;
    currency?: string;
}

const AddSpend = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState([
        { inputId: 'category', inputType: 'text', activated: true },
        { inputId: 'comment', inputType: 'text', activated: true },
        { inputId: 'cost', inputType: 'text', activated: true },
        { inputId: 'currency', inputType: 'text', activated: false },
    ]);
    const [form, setForm] = useState<IFormObject>({ currency: 'eur' });
    const [err, setErr] = useState<string[]>([]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        setErr([]);
        const validationResult: string[] = formValidator(form);
        console.log(validationResult);
        if (validationResult.length > 0) {
            setErr(validationResult);
            return;
        }
        console.log(form);
        dispatch(addSpend(form));
    };

    const formValidator = (formObject: IFormObject) => {
        const err: string[] = [];

        if (!formObject.category) {
            err.push('category');
        }
        if (!formObject.cost) {
            err.push('cost');
        }
        if (!formObject.currency) {
            err.push('currency');
        }

        return err;
    };
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form
                className="flex flex-col justify-between items-center w-3/4"
                onSubmit={submitHandler}
            >
                {inputs
                    .filter((input) => input.activated)
                    .map((input) => (
                        <Input
                            key={input.inputId}
                            inputType={input.inputType}
                            inputId={input.inputId}
                            changeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                                changeHandler(e)
                            }
                            err={err.includes(input.inputId)}
                        />
                    ))}

                <button className="p-1 border border-black" type="submit">
                    Add Spendi
                </button>
            </form>
        </div>
    );
};

export default AddSpend;
