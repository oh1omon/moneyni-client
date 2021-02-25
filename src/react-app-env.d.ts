/// <reference types="react-scripts" />
interface ISpending {
    category: string;
    date: number;
    comment: string;
    cost: number;
}

type ISpendingAction = {
    type: string;
    spending: ISpending;
};
