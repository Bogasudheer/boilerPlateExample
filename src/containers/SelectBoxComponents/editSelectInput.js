import React from "react";
import BaseSelectBox from "../../elements/selectBox";


class NewRecordButton extends BaseSelectBox {

    constructor(props){
        super(props);
        this.show = this.props.roleMetaData.canShow;
        this.onChange = this.props.roleMetaData.canEdit;
      }
}

export default NewRecordButton;
