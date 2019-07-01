import React, {
    Component
} from "react";
import {
    Button,
    Input,
    Image,
    Select
} from "@/amazonUI";

const {
    Option
} = Select;

class UIPage extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    change (value) {
        console.log(value);
    }
    render () {
        return <div>
            <Button>button</Button>
            <Input
                type = "text"
                placeholder = "HI!"
                />
            <Image
                src = "https://www.baidu.com/img/bd_logo1.png"
                alt = "baidu"
                />
            <Select 
                value = ""
                onChange = {this.change}>
                <Option 
                    value = "">
                    --请选择一个亚马逊站点--
                </Option>
                <Option
                    value = "USA">
                    USA
                </Option>
                <Option
                    value = "UK">
                    UK
                </Option>
            </Select>
        </div>
    };
}

export default UIPage;
