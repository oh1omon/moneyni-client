/// <reference types="react-scripts" />
interface IDaySpendings {
    _id: string;
    date: string;
    sum: number;
    spendings: string[];
}

type DayAction = {
    type: string;
    day: IDaySpendings;
};

type SpendingsState = IDaySpendings[];
