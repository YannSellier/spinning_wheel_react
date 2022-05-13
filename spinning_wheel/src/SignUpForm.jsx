import React,{Component} from "react";
import FormInput from "./FormInput";

class SignUpForm extends Component{
    state = {
        email: "",
        nom: "",
        prenom: "",
    };
    handleSubmit = event =>{
        event.preventDefault();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    inputType="text" 
                    fieldName="nom" 
                    placeHolder="Nom"
                />
                <FormInput 
                    inputType="text" 
                    fieldName="email" 
                    placeHolder="E-mail"
                />
                <FormInput 
                    inputType="text" 
                    fieldName="prenom" 
                    placeHolder="Prénom"
                />
                <button type="submit">Valider</button>
            </form>
        );
    }

};

export default SignUpForm;
