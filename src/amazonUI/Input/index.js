import React, {
    Component
} from "react";

class Input extends Component {
    constructor (props) {
        super(props);

        this.states = {};
    }
    render () {
        return <form action = "javascript: return false;">
            <input/>
        </form>
    }
}

export default Input;
