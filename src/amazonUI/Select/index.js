import React, {
    Component
} from "react";
import Option from "./Option";
import "./index.css";
import SelectValueContext from "./SelectValueContext.js";

class Select extends Component {
    constructor (props) {
        super(props);
        let value = props.value;

        this.state = {
            value,
            onChange: props.onChange,
            showOptions: false
        };
        this.changeValue = this.changeValue.bind(this);
        this.click = this.click.bind(this);
    }
    changeValue (event, value) {
        let {
            showOptions
        } = this.state;

        this.setState({
            value,
            showOptions: !showOptions
        });
        
        this.props.onChange(value);
    }
    click (event) {
        let {
            showOptions
        } = this.state;

        this.setState({
            showOptions: !showOptions
        });
    }
    render () {
        let {
            showOptions,
            value
        } = this.state;
        let {
            children
        } = this.props;

        let title = "";

        if ( children instanceof Array ) {
            for ( let i = 0, childrenLength = children.length;
                i < childrenLength;
                i ++ ) {
                if ( children[i].props.value === value ) {
                    title = children[i].props.children;
                }
            }
        } else if ( children instanceof Object ) {
            title = children.props.children;
        }

        return <SelectValueContext.Provider value = {this.changeValue}>
            <div
                className = "amazonUISelect">
                <div
                    className = "SelectTitle"
                    onClick = {this.click}>
                    { title }
                </div>
                {
                    showOptions &&
                    <div
                        className = "SelectOption">
                        { children }
                    </div> 
                }
            </div>
        </SelectValueContext.Provider>
    }
}

Select.Option = Option;

export default Select;
