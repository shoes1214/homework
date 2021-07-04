import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Toast } from "antd-mobile";

export default class VerifyButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
  };

  render() {
    const { callback, btnText } = this.props;

    return (
      <Button className="warning-btn" type="warning" onClick={callback}>
        {btnText}
      </Button>
    );
  }
}
