
import { types } from "./walletTypes";

export const submit = (number, address, data, transactions) => {
    console.log('submit was called');
    return {
        type: types.SUBMIT,
        walletData: {
            number: number,
            address: address,
            walletObj: data,
            transactions: transactions
        }
    };
};

export const remove = () => {
    return {
        type: types.REMOVE,
    };
};

