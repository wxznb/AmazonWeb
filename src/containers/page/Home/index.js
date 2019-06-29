import React, {
    Component
} from "react";
import {
    connect
} from "react-redux";
import {
    // exampleAction,
    getAmazonDomain
} from "@/actions/index.js";

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    componentDidMount () {
        const {
            dispatch
        } = this.props;

        // dispatch(exampleAction());
        dispatch(getAmazonDomain());
    }
    render () {
        return <div>
            Home
        </div>;
    }
}

const mapStatesToProps = (state) => {
    const {
        // example,
        amazonDomain
    } = state;

    return {
        // example,
        amazonDomain
    };
};

export default connect(mapStatesToProps)(Home);
