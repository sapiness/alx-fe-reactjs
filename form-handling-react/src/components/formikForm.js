import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function FormikForm() {
    const validationSchema = Yup.object().shape({
    //   username: Yup.string()
    //     .min(2, 'Name must be at least 2 characters')
    //     .max(50, 'Name must be at most 50 characters')
        username: Yup.string().required('Name is required'),
    //   email: Yup.string()
    //     .email('Invalid email address')
        email: Yup.string().required('Email is required'),
    //   password: Yup.string()
    //     .min(8, 'Password must be at least 8 characters')
        password: Yup.string().required('Password is required'),
    });


    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      };


      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Formik Form"
        ),
        React.createElement(
          Formik,
          {
            initialValues: { username: '', email: '', password: '' },
            validationSchema: validationSchema,
            onSubmit: handleSubmit
          },
          function (_ref) {
            var isSubmitting = _ref.isSubmitting,
              errors = _ref.errors,
              touched = _ref.touched;
            return React.createElement(
              Form,
              null,
              React.createElement(
                "label",
                null,
                "Name:"
              ),
              React.createElement(Field, { type: "text", name: "username" }),
              errors.username && touched.usernamename ? React.createElement(
                "div",
                { style: { color: 'red' } },
                errors.username
              ) : null,
              React.createElement(
                "label",
                null,
                "Email:"
              ),
              React.createElement(Field, { type: "email", name: "email" }),
              errors.email && touched.email ? React.createElement(
                "div",
                { style: { color: 'red' } },
                errors.email
              ) : null,
              React.createElement(
                "label",
                null,
                "Password:"
              ),
              React.createElement(Field, { type: "password", name: "password" }),
              errors.password && touched.password ? React.createElement(
                "div",
                { style: { color: 'red' } },
                errors.password
              ) : null,
              React.createElement(
                "button",
                { type: "submit", disabled: isSubmitting },
                "Submit"
              )
            );
          }
        )
      );
    }
    export default FormikForm;



// const  FormikForm  = () => (
//     <Formik
//     initialValues={{ name: '', email: '', password: '', }}
//     validationSchema={validationSchema}
//     onSubmit={(values) => {
//         console.log(values);
//     }}
// >
//     {() => (
//            <Form>
//                 <Field type="text" name="name" />
//                 <ErrorMessage name="name" component="div" />
//                 <Field type="email" name="email" />
//                 <ErrorMessage name="email" component="div" />
//                 <Field type="password" name="password" />
//                 <ErrorMessage name="password" component="div" />
//                 <button type="submit">Submit</button>
//             </Form>
//         )}
//     </Formik>
// );

// export default  FormikForm;