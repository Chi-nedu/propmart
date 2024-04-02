'use client'
import style from './style.module.css'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';

function Signup() {
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('Firstname is required'),
        last_name: Yup.string().required('Lastname is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string()
        .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
        .required('Phone number is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }
      );
    
      const handleSubmit = async (values, actions) => {
        try {
            // await axios.post(apiroute, values); //use this to send the login to the ap and get your response
            console.log("submiting", values)
            setIsSent(true);
            actions.resetForm();
        } catch (error) {
            setError('Failed to create account, check network connection and try again');
        }
      };

  return (
    <div className={style.container} id='contact'>
        <div className={`${style.innercontainer}`}>
          <h1 className='Logintitle'>Sign up</h1>
          <div className={style.mainCOntainer}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    
                      <Form className={style.form}>
                        {/* Form fields */}
                        {/* First Name */}

                        <div className={style.name}>
                          <div className={`${style.label}`}>
                            <label htmlFor={'inputfield'} className={style.fname}>First Name</label>
                            <Field id={'inputfield'} className={style.fname_input} type='text' name="first_name" />
                            <ErrorMessage name="first_name" component="div" className="error" />
                          </div>

                        {/* Last Name */}
                        <div className={`${style.label}`}>
                            <label htmlFor={'inputfield1'} className={style.lname}>Last Name</label>
                            <Field id={'inputfield1'} className={style.lname_input} type='text' name="last_name" />
                            <ErrorMessage name="last_name" component="div" className="error" />
                          </div>
                        </div>

                        {/* Email */}
                        <div className={`${style.label2}`}>
                          <label htmlFor={'inputfield2'} className={style.fname}>Email</label>
                          <Field id={'inputfield2'} className={style.email_input} type="email" name="email" />
                          <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        {/* Phone */}
                        <div className={`${style.label3}`}>
                          <label htmlFor={'inputfield3'} className={style.fname}>number</label>
                          <Field id={'inputfield3'} className={`${style.email_input} ${style.emailthing}`}  placeholder='090 0000 0000' type={'tel'} name="phone" />
                          <ErrorMessage name="phone" component="div" className="error" />
                        </div>

                        {/* Password */}
                        <div className={style.label2}>
                            <label htmlFor="password" className={style.fname}>Password</label>
                            <Field id="password" className={style.password_input} type={showPassword ? "text" : "password"} name="password" />
                            <button
                                type="button"
                                className={style.show_password_button}
                                onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                            </button>
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        {/* Confirm Password */}
                        <div className={style.label2}>
                            <label
                                htmlFor="confirmPassword"
                                className={style.fname}
                            >
                                Confirm Password
                            </label>
                            <Field
                                id="confirmPassword"
                                className={style.password_input}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                            />
                            <button
                                type="button"
                                className={style.show_password_button}
                                onClick={toggleConfirmPasswordVisibility}
                                >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </button>
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="error"
                            />
                        </div>

                        <input className={style.submit} type='submit' disabled={isSubmitting} value={'Send'}/>
                        {isSent && <div className='text-[0.7rem] w-full text-center pt-1 '>Sign up successful</div>}
                        {error && <div className="error">{error}</div>}
                      </Form>
                )}
            </Formik>
          </div>
        </div>
    </div>
  )
}

export default Signup