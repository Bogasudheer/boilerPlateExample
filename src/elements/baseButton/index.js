import React from "react";
import PropTypes from 'prop-types';
import "./index.css"

class BaseButton extends React.Component {

    constructor(props) {
        super(props);
        this.show = true;
        this.state = {}
    }

    render() {
        console.log(this.props);
        console.log(this.show);
        let { label, className, type, disabled, onClick, style, show } = this.props;
        return (
            <React.Fragment>
                {(this.show) &&
                    <button style={style} className={className} disabled={disabled} onClick={onClick} type={type}>{label}</button>
                }
            </React.Fragment>
        );
    }
}

BaseButton.propTypes = {
    lable: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default BaseButton;

