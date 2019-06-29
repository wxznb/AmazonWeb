import React, {
    Component
} from "react";
import "./index.css";

class Input extends Component {
    constructor (props) {
        super(props);

        this.state = {
            type: props.type || "text",
            maxlength: props.maxlength || -1,
            placeholder: props.placeholder || ""
        };
    }
    render () {
        let {
            type,
            maxlength,
            placeholder
        } = this.state;

        return <form 
            action = "javascript: return false;">
            <input
                type = { type }
                maxLength = { maxlength }
                placeholder = { placeholder }
                />
        </form>
    }
}

export default Input;
