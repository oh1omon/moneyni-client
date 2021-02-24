const initialState = [
    {
        _id: 'gewgwegwesd624k626',
        date: '31.12.12',
        sum: 34.56,
        spendings: ['r2er2', 'ewrwett'],
    },
];

export const reducer = (
    state: SpendingsState = initialState,
    action: DayAction
) => {
    switch (action.type) {
        default:
            return state;
    }
};
