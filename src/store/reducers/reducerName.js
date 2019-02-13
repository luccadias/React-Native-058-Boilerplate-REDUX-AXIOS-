import { TEST } from '../actions/actionsTypes';

const initialState = {
    testState: null
};

export const reducerName = (state = initialState, action) => {
    switch (action.type) {
        case TEST: {
            return {
                ...state,
                testState: action.actionName
            };
        }

        default: {
            return state;
        }
    }
};
