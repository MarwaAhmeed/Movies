import {Form ,Button}from 'react-bootstrap'
import { useEffect, useState } from "react";

function Login() {
  const emailPattern= new RegExp("^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$")
 const [userForm,setUserForm]=useState({
   userEmail:"",
   passowrd:""
 });
 useEffect(() => {
  console.log(userForm);
}, [userForm]);

 const [userFormErrors, setUserFormError] = useState({
  userEmailErr: null,
  passwordErr: null,
});
const handleFormSubmit= (e)=>{
  e.preventDefault();
}
const handelFormChange=(e)=>{
  if(e.target.name==="userEmail"){
    setUserForm({
      ...userForm,
      userEmail:e.target.value,
    });
    setUserFormError({
      ...userFormErrors,
      userEmailErr:
       e.target.value.length===0
       ?"this filed is requird"
       :!emailPattern.test(e.target.value) 
       ?"email not valid" 
       : null
    })
  }
    else if(e.target.name==="password"){
      setUserForm({
        ...userForm,
        passowrd:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        passwordErr:
         e.target.value.length===0
         ?"this filed is requird"
         :e.target.value.length<8
         ?"must be 8 char" 
         : null
      })
    }
}
return (
    <div className='container'>
     <div className="row d-flex flex-column align-content-center">
    <Form className='w-50 m-5'onSubmit={(e) => handleFormSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='userEmail' aria-describedby='useremail' value={userForm.userEmail} onChange={(e)=>handelFormChange(e)}/>
        <Form.Text id="useremail" className="text-danger">
            {userFormErrors.userEmailErr}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' aria-describedby='userpass' value={userForm.password} onChange={(e)=>handelFormChange(e)} />
        <Form.Text id="userpass" className="text-danger">
            {userFormErrors.passwordErr}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
 </div>
  );
}
export default Login;
