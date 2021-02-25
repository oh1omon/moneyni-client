import React from 'react';

export const SpenInput = () => {
    return (
        <div>
            <form className="flex flex-col w-1/3">
                <label>
                    Category
                    <input
                        className="border border-black"
                        type="text"
                        id="categoryInput"
                    />
                </label>
                <label>
                    Cost
                    <input
                        className="border border-black"
                        type="text"
                        id="costInput"
                    />
                </label>
                <label>
                    Comment
                    <input
                        className="border border-black"
                        type="text"
                        id="commentInput"
                    />
                </label>
                <button className="w-1/2 bg-blue-700">Submit</button>
            </form>
        </div>
    );
};
