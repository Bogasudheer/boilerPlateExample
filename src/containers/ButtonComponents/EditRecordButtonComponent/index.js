import React from "react";
import BaseButton from "../../../elements/baseButton";
import './index.css';


class EditRecordButton extends BaseButton {

    constructor(props){
        super(props);
        this.show = this.props.roleMetaData.canEdit;
      }
}

export default EditRecordButton;
