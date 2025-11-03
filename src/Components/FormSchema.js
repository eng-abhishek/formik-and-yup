import * as Yup from 'yup';
    
const mobileReges = /^\+?[0-9\s\-\(\)]{8,20}$/;
const passReges = /^\+?[0-9\s\-\(\)]{8,20}$/;

export const FormSchema = Yup.object({

    name:Yup.string().min(3).max(10).required("Name is required"),
    email:Yup.string().email().required("Email is required"),
    age:Yup.number().min(12).max(55).required("Enter Age"),
    mobile:Yup.string().min(10).max(10).matches(mobileReges,'Phone number is not valid').required("Enter Mobile Number"),
    password:Yup.string().min(8).max(16).required("Enter Password"),
    cpassword:Yup.string().required("c pass is required").oneOf([Yup.ref('password'),null],"pass and c pass not match")
})
