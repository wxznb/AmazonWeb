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
        this.input = this.input.bind(this);
        this.change = this.change.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
    }
    input ( event ) {
        if ( !!this.props.onInput ) {
            this.props.onInput( event );
        }
    }
    change ( event ) {
        if ( !!this.props.onChange ) {
            this.props.onChange( event );
        }
    }
    focus ( event ) {
        if ( !!this.props.onFocus ) {
            this.props.onFocus( event );
        }
    }
    blur ( event ) {
        if ( !!this.props.onBlur ) { 
            this.props.onBlur( event );
        }
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
                onInput = { this.input }
                onChange = { this.change }
                onFocus = { this.focus }
                onBlur = { this.blur }
                className = "input"
                />
        </form>
    }
}

export default Input;
