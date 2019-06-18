import {
    EXAMPLE
} from "../../actions/type.js";

let example = (state = "example", action) => {
    switch(action.type) {
        case EXAMPLE:
            console.log("example reducer");
            return state;
        default:
            return state;
    }
};

export {
    example
};