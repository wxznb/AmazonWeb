import React, {
    Component
} from "react";
import "./index.css";

class Image extends Component {
    constructor (props) {
        super(props);

        this.state = {
            src: props.src,
            alt: props.alt || "imageAlt"
        };
    }
    render () {
        let {
            src,
            alt
        } = this.state;

        return <div
            className = "amazonUIImage">
            <img
                src = { src }
                alt = { alt }
                />
        </div>
    }
}

export default Image;