import React,{Component} from "react";

class FormInput extends Component{
    state ={

    };

    render(){
        const { inputType, fieldName, placeHolder } = this.props;
        return (
        <input 
            type={inputType} 
            name={fieldName}
            placeHolder={placeHolder}
        />
        );

    }

};

export default FormInput;