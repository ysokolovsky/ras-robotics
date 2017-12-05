import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormErrors } from './FormErrors';
import Header from './../components/Header';


export default class CouponPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      formValid: false,
      message: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
      }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {[name]: value}, 
      () => { this.validateField(name, value) }
    );
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({ email: ''});

    axios.get('http://scooterlabs.com/echo', {
      params: {
        time: moment().unix(),
        email: this.state.email
      }  
    })
    .then(response => {
      console.log(response);
      this.setState({message: "Thanks! Email with coupon sent"})
    })
    .catch(error => {
      console.log(error);
      this.setState({message: "Oops! Smth went wrong"})
    });

  }
  
  render() {
    return (
      <div className="coupon-container">
        <Header />
        <h3>Get coupon for for the hotel spa now! Enter email</h3>
        <form onSubmit={this.onFormSubmit}>
          <FormErrors formErrors={this.state.formErrors} />
          <input 
            value={this.state.email}
            onChange={this.onInputChange} 
            name='email'
          />
          <button 
            type="submit" 
            className="btn btn-secondary"
            disabled={!this.state.formValid}
          >Submit</button>
          {this.state.message && <span>{this.state.message}</span>}
        </form>
      </div>
    )
  }
}
