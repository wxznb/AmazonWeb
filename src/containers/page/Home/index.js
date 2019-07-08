import React, {
    Component
} from "react";
import {
    connect
} from "react-redux";
import {
    Select
} from "@/amazonUI";
import {
    // exampleAction,
    getAmazonDomains
} from "@/actions/index.js";

const Option = Select.Option;

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            options: []
        };
        this.options = this.options.bind(this);
    }
    componentDidMount () {
        const {
            dispatch
        } = this.props;

        dispatch(getAmazonDomains());
    }
    componentWillMount () { }
    changeSelect ( event ) {
        console.log(event);
    }
    options () {
        let {
            amazonDomains
        } = this.props;
        let domainOptions = [
            <Option
                value = "" 
                key = "default">--- Please Select ---</Option>
        ];

        amazonDomains.forEach(function ( amazon ) {
            domainOptions.push(<Option
                value = {amazon} 
                key = {amazon}>{amazon}</Option>);
        });

        return domainOptions;
    }
    render () {
        return <div>
            <Select
                value = ""
                onChange = {this.changeSelect}>
                {this.options()}
            </Select>
        </div>;
    }
}

const mapStatesToProps = (state) => {
    const {
        // example,
        amazonDomains
    } = state;

    return {
        // example,
        amazonDomains
    };
};

export default connect(mapStatesToProps)(Home);
