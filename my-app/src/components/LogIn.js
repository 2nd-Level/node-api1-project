// import React, { useState } from "react";

// function LoginForm() {
//   const [user, setUser] = useState({ username: "", password: "" });

//   const handleChange = event => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(user.username);
//     console.log(user.password);
//   };

//   return (
//     <div className="loginForm">
//       {console.log(user)}
//       <form onSubmit={event => handleSubmit(event)}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="text"
//             name="password"
//             onChange={event => handleChange(event)}
//           />
//         </label>
//         <button>Submit!</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;



import React from "react";
import { withFormik, Form, Field } from "formik";

function LoginForm() {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(LoginForm);
  
  export default FormikLoginForm;