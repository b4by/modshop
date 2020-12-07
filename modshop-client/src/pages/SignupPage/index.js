import './index.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { registerUser } from '../../api/api';

const SuccessSubmit = () => {
  return (
    <div className="success-message">
      Your form has been successfully send!
    </div>
  )
}

const SignupPage = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ username, email, phone, password }) => {
    registerUser(username, email, phone, password)
    .then(res => {
      setIsSubmitted(true);
    })
    .catch(error => {
      setIsSubmitted(false);
    })
  } 

  return (
    <section className="signup">
      <div className="container">
        {!isSubmitted ? 
        ( 
          <>
            <h2 className="signup__title">Register</h2>
            <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="signup__form-item">
                <label className="signup__form-label" htmlFor="username">First Name</label>
                <input 
                  className="signup__form-input" 
                  id="username"
                  name="username" 
                  type="text"
                  ref={
                    register({
                      required: 'Please, fill this field.',                  
                    })
                  }
                />
              {errors.username && <p className="signup__form-message">{errors.username.message}</p>}
              </div>
              <div className="signup__form-item">
                <label className="signup__form-label" htmlFor="phone">Phone Number</label>
                <input 
                  className="signup__form-input" 
                  id="phone"
                  name="phone"
                  type="tel" 
                  ref={register}
                />
              </div>
              <div className="signup__form-item">
                <label className="signup__form-label" htmlFor="email">Email</label>
                <input 
                  className="signup__form-input" 
                  id="email" 
                  name="email"
                  type="email"
                  ref={register({
                    required: 'Please, fill this field.',
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address"
                  })} 
                />
                {errors.email && <p className="signup__form-message">{errors.email.message}</p>}
              </div>
              <div className="signup__form-item">
                <label className="signup__form-label" htmlFor="password">Password</label>
                <input 
                  className="signup__form-input" 
                  id="password"
                  name="password"
                  type="password" 
                  ref={register({
                    required: "Please, fill this field."
                  })}
                />
                {errors.password && <p className="signup__form-message">{errors.password.message}</p>}
              </div>
              <input type="submit" className="signup__form-btn" value="Register" />
            </form>
          </>
        ) : (
          <SuccessSubmit />
        )}
      </div>
    </section>
  );
}

export default SignupPage;