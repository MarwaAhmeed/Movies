import {Form ,Button}from 'react-bootstrap'
import { useEffect, useState } from "react";

function Register() {
  const emailPattern= new RegExp("^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$")
  const namePattern=new RegExp("^[a-z]*$")
  const passPattern=new  RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})")
 const [userForm,setUserForm]=useState({
   userName:"",
   userEmail:"",
   passowrd:"",
   confirmPass:""
 });
 useEffect(() => {
  console.log(userForm);
}, [userForm]);

 const [userFormErrors, setUserFormError] = useState({
 userNameErr:null,
  userEmailErr: null,
  passwordErr: null,
  confirmPassErr:null
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
  else if(e.target.name==="userName"){
    setUserForm({
      ...userForm,
      userName:e.target.value,
    });
    setUserFormError({
      ...userFormErrors,
      userNameErr:
       e.target.value.length===0
       ?"this filed is requird"
       :!namePattern.test(e.target.value) 
       ?"No space" 
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
         :!passPattern.test(e.target.value) 
         ?"password length not less than 8 characters , contains at least one lowercase , one uppercase ,  at least one digit and special character" 
         : null
      })
    }
    else if(e.target.name==="confirmpassword"){
      setUserForm({
        ...userForm,
        confirmPass:e.target.value,
      })
      setUserFormError({
        ...userFormErrors,
        confirmPassErr:
        e.target.value.length===0
        ?"this filed is requird"
         :e.target.value !=userForm.passowrd
         ?"Doesnt Match"
         : null
      })
    }
}
  return (
    <div className='container'>
      <div className='row d-flex flex-column align-content-center'>
    <Form className='w-50 m-5'onSubmit={(e) => handleFormSubmit(e)}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='userName' aria-describedby='userename' value={userForm.userName} onChange={(e)=>handelFormChange(e)}/>
        <Form.Text id="userename" className="text-danger">
            {userFormErrors.userNameErr}
        </Form.Text>
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Comfirm Your Password" name='confirmpassword' aria-describedby='userconfirmpass' value={userForm.confirmPass} onChange={(e)=>handelFormChange(e)} />
        <Form.Text id="userpass" className="text-danger">
            {userFormErrors.confirmPassErr}
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
export default Register;
