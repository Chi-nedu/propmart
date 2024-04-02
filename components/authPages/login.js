'use client'
import style from './style.module.css'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';

function Login() {
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
      });
    
      const handleSubmit = async (values, actions) => {
        try {
            // await axios.post(apiroute, values); //use this to send the login to the ap and get your response
            console.log("submiting", values)
            setIsSent(true);
            actions.resetForm();
        } catch (error) {
            setError('Login succesful');
        }
      };

  return (
    <div className={style.container} id='contact'>
        <div className={`${style.innercontainer} `}>
          <h1 className='Logintitle'>Login in</h1>
          <div className={style.main}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                    
                      <Form className={style.form}>
                        {/* Form fields */}
                        {/* Email */}

                        <div className={`${style.label2}`}>
                          <label htmlFor={'inputfield2'} className={style.fname}>Email</label>
                          <Field id={'inputfield2'} className={style.email_input} type="email" name="email" />
                          <ErrorMessage name="email" component="div" className={style.errorMsg} />
                        </div>

                        {/* Password */}
                        <div className={style.label2}>
                            <label htmlFor="password" className={style.fname}>Password</label>
                            <Field id="password" className={style.password_input} type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        {/* forgot password */}
                        <Link href={'the href to password reset button'}>Forgot password?</Link>

                        {/* submit button */}
                        <input className={style.submit} type='submit' disabled={isSubmitting} value={'Send'}/>
                        {isSent && <div className='text-[0.7rem] w-full text-center pt-1 '>
                                is loading
                            </div>}
                        {error && <div className="error">{error}</div>}
                      </Form>
                )}
            </Formik>
          </div>
        </div>
    </div>
  )
}

export default Login