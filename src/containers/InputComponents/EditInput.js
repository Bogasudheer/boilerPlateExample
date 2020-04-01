import React from "react";
import BaseInput from '../../elements/baseInput';


class EditInput extends BaseInput {

    constructor(props){
        super(props);
        this.show = this.props.roleMetaData.canShow;
        this.onChange = this.props.roleMetaData.canEdit;
      }
}

export default EditInput;
