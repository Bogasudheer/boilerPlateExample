import React from "react";
import BaseCheckBox from "../../elements/baseCheckBox";


class checkBoxComponent extends BaseCheckBox {

    constructor(props){
        debugger;
        super(props);
        this.show = this.props.roleMetaData.canShow;
        this.onChange = this.props.roleMetaData.canEdit;
      }
}

export default checkBoxComponent;
