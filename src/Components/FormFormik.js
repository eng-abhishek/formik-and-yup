import React from "react";
import { useFormik } from "formik";

function FormFormik(){
    
    const formFormInputValue={
        name:'',
        email:'',
    };

    const formik = useFormik({
        initialValues:formFormInputValue,
        onSubmit:(value)=>{
            console.log(value);
            console.log(value.name);
            console.log(value.email);
        }
    });

    return(<>
             <div>
                <h1>Form Formik</h1>
             <div>
                <form onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="enter name" value={formik.values.name} onChange={formik.handleChange}/>
                    <br/><br/><br/>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="enter email" value={formik.values.email} onChange={formik.handleChange}/>
                    <br></br>
                    <button> Submit </button>
                </form>
             </div>
             </div>
        </>);
}

export default FormFormik;