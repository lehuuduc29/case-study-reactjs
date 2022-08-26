
import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import './App.css';


function App() {

  const [isStatus, setisStatus] = useState(true)

  let testEnzyme = isStatus

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Fill in the blanks'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Fill in the blanks'),
    email: Yup.string()
      .email('Invalid email')
      .required('Fill in the blanks'),
    password: Yup.string()
      .min(5,'Too Short')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Fill in the blanks'),
  });


  if (isStatus) {
    return (
      <div className="bg-login">
        <h1>Todo-App</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={() => {
            setisStatus(false)
            console.log('err', isStatus, testEnzyme);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-login">
              <table border='0' className="table-form">
                <thead>
                  <tr>
                    <th colSpan = '2'>Log In</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First Name:</td>
                    <td>
                      <Field name="firstName" className="field"/>
                      {errors.firstName && touched.firstName ? (
                        <div className='errors'>{errors.firstName}</div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>
                      <Field name="lastName" className="field" />
                      {errors.lastName && touched.lastName ? (
                        <div className='errors'>{errors.lastName}</div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <Field name="email" type="email" className="field" />
                      {errors.email && touched.email ? <div className='errors'>{errors.email}</div> : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>
                    <Field name="password" type="password" className="field" />
                      {errors.password && touched.password ? <div className='errors'>{errors.password}</div> : null}
                    </td>
                  </tr>
                  <tr>
                    <td className='td-btn' colSpan = '2'>
                      <button className='btn' type="submit">Submit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          )}
        </Formik>
      </div>
    )
  } else if (!isStatus) {
    return (
      <div className="bg-todolist">
        <div className="newtodo">
          <AddTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    )
  }

}

export default App;