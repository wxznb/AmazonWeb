import {
    GETAMAZONDOMAINS
} from "@/actions/type.js";

const initialState = {
    amazonDomains: []
};

export const amazonDomains = function (state = initialState.amazonDomains, action) {
    switch ( action.type ) {
        case GETAMAZONDOMAINS:
            return action.data;
        default:
            return state;
    }
};
