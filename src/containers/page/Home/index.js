import React, {
    Component
} from "react";
import {
    connect
} from "react-redux";
import {
    exampleAction
} from "@/actions/index.js";

class Home extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        const {
            dispatch
        } = this.props;

        dispatch(exampleAction());
    }
    render () {
        return <div>
            Home
        </div>;
    }
}

const mapStatesToProps = (state) => {
    const {
        example
    } = state;

    return {
        example
    };
};

export default connect(mapStatesToProps)(Home);
