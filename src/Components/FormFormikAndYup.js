import React from "react";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";

function FormFormikAndYup(){
    
    const formFormInputValue={
        name:'',
        email:'',
        age:'',
        mobile:'',
        password:'',
        cpassword:''

    };

    const {handleChange,handleSubmit,values,errors,handleBlur,touched} = useFormik({
        initialValues:formFormInputValue,
        validationSchema:FormSchema,
        onSubmit:(value,action)=>{
            action.resetForm();
            console.log(value);
            console.log(value.name);
            console.log(value.email);
        }
    });

    return(<>
             <div>
                <h1>Form Formik with Yup Validation</h1>
             <div>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="enter name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.name && touched.name ? <span style={{color:'red'}}> {errors.name} </span> : null }
                    <br/><br/>
                    
                    <label>Email</label>
                    <input type="text" name="email" placeholder="enter email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.email && touched.email ? <span style={{color:'red'}}>{errors.email}</span> : null }
                    <br/><br/>

                    <label>Age</label>
                    <input type="text" name="age" placeholder="enter age" value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.age && touched.age ? <span style={{color:'red'}}>{errors.age}</span> : null }
                    <br/><br/>

                    <label>Mobile Num</label>
                    <input type="text" name="mobile" placeholder="enter mobile no" value={values.mobile} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.mobile && touched.mobile ? <span style={{color:'red'}}>{errors.mobile}</span> : null }
                    <br/><br/>

                    <label>Password</label>
                    <input type="password" name="password" placeholder="enter password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.password && touched.password ? <span style={{color:'red'}}>{errors.password}</span> : null }
                    <br/><br/>

                    <label>C Password</label>
                    <input type="password" name="cpassword" placeholder="enter c password" value={values.cpassword} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    { errors.cpassword && touched.cpassword ? <span style={{color:'red'}}>{errors.cpassword}</span> : null }
                    <br/><br/>


                    <button> Submit </button>
                </form>
             </div>
             </div>
        </>);
}

export default FormFormikAndYup;