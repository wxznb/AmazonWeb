import React, {
    Component
} from "react";

class Button extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    render () {
        return <div
            className = "Button">
            { this.props.children }
        </div>
    }
}

export default Button;
