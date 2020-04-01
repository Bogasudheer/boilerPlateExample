import React from "react";
import BaseButton from "../../../elements/baseButton";
import './index.css';


class NewRecordButton extends BaseButton {

    constructor(props){
        super(props);
        this.show = this.props.roleMetaData.canAdd;
      }
}

export default NewRecordButton;
