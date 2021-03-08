import * as actionTypes from '../store/spends/spendsActions';
import { Dispatch } from 'redux';
import axios from 'axios';
import { SpendsState, SpendsStateAction } from '../store/spends/spendsTypes';

const getSpendsUrl = 'http://127.0.0.1:3001/api/getspends';

export const initializeSpendsState = (spendsArr: string[]) => {
    console.log(spendsArr);
    return async (dispatch: Dispatch<SpendsStateAction>) => {
        let inState: SpendsState = await axios
            .post(getSpendsUrl, { spends: spendsArr })
            .then((resp) => resp.data.spends);
        console.log(inState);
        dispatch({
            type: actionTypes.SET_SPENDS,
            payload: inState,
        });
    };
};
