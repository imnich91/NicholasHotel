import React from 'react';
import Form, { Field, Message } from 'coreui/lib/components/Form';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import yup from 'yup';

const personSchema = yup.object({
  name: yup.object({
    first: yup.string().default('').required('Please enter a first name'),
    last: yup.string().default('').required('Please enter a last name'),
  }),
  dateOfBirth: yup.date().max(new Date(), 'Are you a time traveler?'),
  colorId: yup.number().nullable().required('Please select a color'),
});

const Login = () => (
  <div className="login-container bg-gradient">
    <div className="login">
      <svg className ="login-brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.86 120">
        <path className = "path-style" d="M60,0L8.07,30V90L60,120l51.93-30V30Zm0,99.07L57.95,97.9,28.22,80.68l-2.05-1.17v-39l2.05-1.17L57.95,22.1,60,20.93l2.05,1.17L91.78,39.22l2.05,1.17V79.51l-2.05,1.17L62.05,97.8Z" transform="translate(-8.07)"/>
        <polygon className = "polygon-style" points="22.69 43.13 22.69 76.87 51.93 93.79 81.17 76.87 81.17 43.13 51.93 26.21 22.69 43.13"/>
      </svg>
      <h1 className = "login-brand-name">Nexxus Marketing</h1>
      <Form autoComplete = "off" defaultValue={personSchema.default()}
      onSubmit={(v) => console.log(v)}
      schema={personSchema}>
        <div className = "form-group">
          <Label className = "control-label">
            <span className = "sr-only">Username</span>
            <input className = "form-control input-lg" type="username" name="username" id="login-username" placeholder="Username" spellcheck="false"></input>
          </Label>
        </div>
        <div className = "form-group">
          <Label className = "control-label">
            <span className = "sr-only">Password</span>
            <input className = "form-control input-lg" type="password" name="password" id="login-password" placeholder="Password"></input>
          </Label>
        </div>
        <div className = "form-group">
          <div className = "checkbox pull-xs-left">
            <Label className = "control-label">
              <input type= "checkbox" name = "rememberme" id = "login-rememberme" placeholder = "Remember me">
              </input>
              Remember me
            </Label>
          </div>
          <a className = "pull-xs-right" href = "#0">Forgot Password</a>
        </div>
        <div className = "form-group text-xs-center">
          <Button className = "btn btn-primary btn-lg" type = "submit">Login</Button>
        </div>
      </Form>
    </div>
  </div>
)

export default Login;
