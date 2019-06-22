import {
    GETAMAZONDOMAIN
} from "@/actions/type.js";

const initialState = {
    amazonDomain: []
};

export const amazonDomain = function (state = initialState.amazonDomain, action) {
    switch ( action.type ) {
        case GETAMAZONDOMAIN:
            return action.data;
        default:
            return state;
    }
};
