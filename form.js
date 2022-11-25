import React from 'react';
import './form.css';

class DynamicForm extends React.Component{
        constructor(){
                super();
                this.state={
                        fields: {},
                        errors: {}
                }
                this.handleChange = this.handleChange.bind(this);
                this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        };
        handleChange(e) {
                let fields = this.state.fields;
                fields[e.target.name] = e.target.value;
                this.setState({
                  fields
                });
              
            
              }
            
        submituserRegistrationForm(e) {
                console.log(this.validateForm());
                e.preventDefault();
                if (this.validateForm()) {
                console.log(this.state);
                let fields = {};
                fields["username"] = "";
                fields["emailid"] = "";
                fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }
  validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "Please Fill the column";
        }
    
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "Please enter alphabets only.";
          }
        }
              if (!fields["emailid"]) {
                formIsValid = false;
                errors["emailid"] = "Invalid Email";
              }
          
              if (typeof fields["emailid"] !== "undefined") {
                var pattern = new RegExp(
                  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
                );
                if (!pattern.test(fields["emailid"])) {
                  formIsValid = false;
                  errors["emailid"] = "Enter a valid Email";
                }
              }
              if (!fields["password"]) {
                formIsValid = false;
                errors["password"] = "Please Fill the password";
              }
          
              if (typeof fields["password"] !== "undefined") {
                if (
                  !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) ||
                  !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) ||
                  !(fields["password"].match(/([0-9])/)) 
                ) {
                  formIsValid = false;
                  errors["password"] = "Password is Weak";
                }
              }
              this.setState({
                errors: errors
              });
              return formIsValid;
              
            }
            render() {
                return (
                <div id="form-all">
                 <div id="form-out">
                    <h1>Dynamic Form</h1>
                    <div id="form-in">
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                      <br/><br/>
                    <label>Enter your username</label><br/><br/>
                    <input type="text" name="username" placeholder="your Username" className="a" value={this.state.fields.username} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.username}</div><br/><br/>
                    <label>Enter your email</label><br/><br/>
                    <input type="text" name="emailid" placeholder='Your Email' className="b" value ={this.state.fields.emailid} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.emailid}</div><br/><br/>
                    <label>Enter your password</label><br/><br/>
                    <input type="password" name="password" placeholder='your Password' className="d" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div><br/><br/>
                    <input type="submit" className="button"  value="Submit"/>
                    </form>
                    </div>
                </div>
              </div>
              
                  );
              }
    
}
export default DynamicForm;


