import React, {
    Component
} from "react";
import {
    Button
} from "@/amazonUI";

class UIPage extends Component {
    constructor (props) {
        super(props);

        this.states = {};
    }
    render () {
        return <div>
            <Button>button</Button>
        </div>
    };
}

export default UIPage;
