import React, {
    Component
} from "react";
import SelectValueContext from "../SelectValueContext.js";

class Option extends Component {
    constructor (props) {
        super (props);

        this.state = {};
        this.click = this.click.bind(this);
    }
    click (event) {
        event.preventDefault();

        // console.log(this.props.value);
    }
    render () {
        let {
            value,
            children
        } = this.props;

        return <SelectValueContext.Consumer>
            {changeValue => (
                <div
                    className = "AmazonUIOption"
                    onClick = {function (event) {
                        changeValue(event, this.props.value);
                    }.bind(this)}
                    key = {value}>
                    {children}
                </div>
            )}
        </SelectValueContext.Consumer>
    }
}

export default Option;
