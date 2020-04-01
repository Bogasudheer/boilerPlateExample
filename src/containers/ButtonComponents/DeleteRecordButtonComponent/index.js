import React from "react";
import BaseButton from "../../../elements/baseButton";
import './index.css';


class DeleteRecordButton extends BaseButton {

    constructor(props){
        super(props);
        this.show = this.props.roleMetaData.canDelete;
      }
}
export default DeleteRecordButton;
