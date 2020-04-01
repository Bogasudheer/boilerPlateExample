import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class BaseSelectBox extends React.Component {

  constructor(props) {
    super(props);
    this.show = true;
    this.state = {}
  }


  selectOptions = (options) => {
    if (options) {
      return (
        options.map((item) => {
          return <option value={item.value}>{item.name}</option>
        })
      );
    }
  }
  render() {
    let { value, className, options, onChange, disabled } = this.props;
    return (
      <React.Fragment>
        {this.show &&
          <select className={`${className}`} value={value} onChange={this.onChange && onChange && ((e) => onChange(e))} disabled={disabled}>
            {this.selectOptions(options)}
          </select>
        }
      </React.Fragment>
    );
  }
}

BaseSelectBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),

}
export default BaseSelectBox;