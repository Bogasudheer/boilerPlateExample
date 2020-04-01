import React from "react";
import PropTypes from 'prop-types';
import "./index.css"

class BaseInput extends React.Component {

    constructor(props) {
        super(props);
        this.show = true;
        this.onChange = true;
        this.state = {}
    }

    render() {
  
        let {maxLength, className, placeholder, value, onChange, styles, type} = this.props;
        return (
            <React.Fragment>
                {(this.show) &&
              <input className={className}  value={value} maxLength={maxLength} style={styles} type={type}
              placeholder={placeholder} onChange={this.onChange && onChange && ((e) => onChange(e))}/>
                }
              </React.Fragment>
        );
    }
}

BaseInput.propTypes = {
    lable: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default BaseInput;

