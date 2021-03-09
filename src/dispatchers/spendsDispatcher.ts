import * as actionTypes from '../store/spends/spendsActions';
import { Dispatch } from 'redux';
import axios from 'axios';
import {
    ISpend,
    SpendsState,
    SpendsStateAction,
} from '../store/spends/spendsTypes';
import { IUser, UserStateAction } from '../store/user/userTypes';
import { addSpendIdToUser } from './userDispatcher';

const getSpendsUrl = 'http://127.0.0.1:3001/api/getspends';
const addSpendUrl = 'http://127.0.0.1:3001/api/addspend';

export const initializeSpendsState = (spendsArr: string[]) => {
    console.log(spendsArr);
    return async (dispatch: Dispatch<SpendsStateAction>) => {
        let spends: SpendsState = await axios
            .post(getSpendsUrl, { spends: spendsArr })
            .then((resp) => resp.data.spends);
        console.log(spends);
        dispatch({
            type: actionTypes.SET_SPENDS,
            payload: spends,
        });
    };
};

export const addSpend = (newSpend: any) => {
    return async (dispatch: Dispatch<any>) => {
        await axios
            .post(addSpendUrl, newSpend)
            .then((res) => {
                dispatch({
                    type: actionTypes.ADD_SPEND,
                    payload: res.data.spend,
                });
                dispatch(addSpendIdToUser(res.data.spend._id));
            })
            .catch((e) => console.log(e));
    };
};
