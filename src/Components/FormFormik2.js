import React,{useState} from "react";
import { Field,Formik,Form,ErrorMessage } from "formik";
import {FormikSchemaYup} from './FormikSchemaYup'

function FormFormik2(){

const [fieldValue,setFieldValue] = useState({});

  return (<>
            <div>
            <h1>This Is Form With Formik Components</h1>
            <Formik initialValues={{name:"",email:"",age:"",gender:"",pass:"",cpass:"",comment:""}}
            onSubmit={(values)=>{
                console.log(values);
                setFieldValue(values);
            }}
            validationSchema={FormikSchemaYup}
            >
                <Form>
                    <label>Enter Name:</label>
                    <Field type="text" name="name"></Field>
                    <br/>
                    <ErrorMessage name="name" component='div' style={{color:"red"}}></ErrorMessage>
                    <br/>

                    <label>Enter Email:</label>
                    <Field type="text" name="email"></Field>
                    <br/>
                    <ErrorMessage name="email" component='div' style={{color:"red"}}></ErrorMessage>
                    <br/>

                    <label>Enter Age:</label>
                    <Field type="text" name="age"></Field>
                    <br/>
                    <ErrorMessage name="age" component='div' style={{color:"red"}}></ErrorMessage>
                    <br/>

                    <label>Gender:</label>
                    <br/>
                    <label>Male:</label>
                    <Field type="radio" name="gender" value="male"></Field>
                    <br/>
                    <label>Female:</label>
                    <Field type="radio" name="gender" value="female"></Field>
                    <br/>
                     <ErrorMessage name="gender" component='div' style={{color:"red"}}></ErrorMessage>
                     <br/>

                    <label>Enter Password:</label>
                    <Field type="password" name="pass"></Field>
                    <br/>
                    <ErrorMessage name="pass" component='div' style={{color:'red'}}></ErrorMessage>
                    <br/>
                    <br/>


                    <label>Enter Confirm Password:</label>
                    <Field type="password" name="cpass"></Field>
                    <br/>
                    <ErrorMessage name="cpass" component='div' style={{color:'red'}}></ErrorMessage>
                    <br/>
                    <br/>

                     <label>Comment:</label>
                     <Field as="textarea" name="comment"></Field>
                     <br/>
                     <ErrorMessage name="comment" component='div' style={{color:'red'}}></ErrorMessage>
                     <br/>
                    <button>Submit</button>
                </Form>
            </Formik>

            <div>Form Data: {JSON.stringify(fieldValue)}</div>
            <h1>{fieldValue.name}</h1>
            </div>
          </>);
}

export default FormFormik2;