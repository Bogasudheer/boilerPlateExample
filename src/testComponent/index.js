import React from "react";
import './index.css';
import data from '../data/data';
import NewRecordButton from '../containers/ButtonComponents/NewRecordButtonComponent';
import EditRecordButton from '../containers/ButtonComponents/EditRecordButtonComponent';
import DeleteRecordButton from '../containers/ButtonComponents/DeleteRecordButtonComponent';
import EditInput from '../containers/InputComponents/EditInput';
import EditSelectInput from '../containers/SelectBoxComponents/editSelectInput';
import checkBoxComponent from "../containers/checkBoxComponent/index";

class TestComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue:'',
            selectValue:'',
            checkBoxValue:false
        }
    }
    handleOnclick = (value) => {
        alert(value);
    }
    handleOnchange = (e) =>{
        this.setState({
            ...this.state,
            inputValue:e.target.value
        })
    }
    handleSelectOnchange = (e) =>{
        this.setState({
            ...this.state,
            selectValue:e.target.value
        })
    }
    handleCheckBoxOnchange = (e) =>{
        debugger
        this.setState({
            ...this.state,
            checkBoxValue:e.target.checked
        })
    }
    render() {
        console.log(data.pages[0]);
        return (
            <React.Fragment>
                <h5>Base Buttons</h5>
                <NewRecordButton label="New Record" className={"new-record-btn-style"} onClick={()=>this.handleOnclick('New Record')} roleMetaData={data.pages[0]} />
                <EditRecordButton label="Edit Record" className={"edit-record-btn-style"} onClick={()=>this.handleOnclick('Edit Record')} roleMetaData={data.pages[0]} />
                <DeleteRecordButton label="Delete Record" className={"delete-record-btn-style"} onClick={()=>this.handleOnclick('Delete Record')} roleMetaData={data.pages[0]} />
                
                <h5>Base Input</h5>
                {/* {BASE iNPUT} */}
                <EditInput className={'input-style'} value={this.state.inputValue} onChange={this.handleOnchange} maxLength={6} roleMetaData={data.pages[1]}/>
                <h5>Base select Box</h5>
                <EditSelectInput className={'select-input-style'} value={this.state.selectValue} options={data.options} onChange={this.handleSelectOnchange} roleMetaData={data.pages[2]}/>
                <h5>Base check Box</h5>
                <checkBoxComponent className={'checkBox-style'} checked={this.state.checkBoxValue} onChange={this.handleCheckBoxOnchange} roleMetaData={data.pages[3]}/>

            </React.Fragment>
        );
    }
}


export default TestComponent;
