import React, {
    Component
} from "react";
import {
    Button,
    Input,
    Image
} from "@/amazonUI";

class UIPage extends Component {
    constructor (props) {
        super(props);

        this.state = {};
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
        </div>
    };
}

export default UIPage;
