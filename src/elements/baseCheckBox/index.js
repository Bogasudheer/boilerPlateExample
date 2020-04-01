import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
class BaseCheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.show = true;
    this.onChange = true;
    this.state = {}
  }

  render() {
    let { className, checked, onChange } = this.props;
    debugger
    return (
      <React.Fragment>
        {this.show &&
          <input className={className} type="checkbox" onChange={this.onChange && onChange && ((e) => onChange(e))} checked={checked} />
        }
      </React.Fragment>
    )
  }
}

BaseCheckBox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default BaseCheckBox;