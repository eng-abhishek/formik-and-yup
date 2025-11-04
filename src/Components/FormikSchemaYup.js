import * as Yup from 'yup'

export const FormikSchemaYup = Yup.object({
      name:Yup.string().min(3).max(15).required("Name field is required"),
      email:Yup.string().email().required("Email field is required"),
      age:Yup.number().required("Age Field is required"),
      gender: Yup.string().required("Please select gender"),
      pass:Yup.string().min(8).max(16).required("Password Field Is Required"),
      cpass:Yup.string().required("C Pass Required").oneOf([Yup.ref("pass"),null],"Pass and cpass not matched"),
      comment:Yup.string().max('100').required("Comment IS required")
});