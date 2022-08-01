import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  
  const regex = new RegExp (/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)


  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [rememberMe, setrememberMe] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setpasswordIsValid] = useState(false)
  const [isSubmitted, setisSubmitted] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleEmailChange = (e) => {
      setEmail(e.target.value)
      // console.log(email)
      regex.test(e.target.value) && setEmailIsValid(true)
      // console.log(emailIsValid)
  }

  const handlePasswordChange = (e) => {
    setPaswword(e.target.value)
    if(e.target.value.length > 5){
      setpasswordIsValid(true)
      } else{
        setpasswordIsValid(false)
      }
  }

  const handleRememberMeChange = () => {
   setrememberMe(!rememberMe)
   console.log(rememberMe)
  }

  const handleSubmit = (e) => {
   e.preventDefault()
   if(emailIsValid && passwordIsValid){
     setisSubmitted(true)
    }
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
    console.log(firstName)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
    console.log(lastName)
  }

  return (
    <div  className="m-5">
    <h1 className="text-center">Login</h1>
    {isSubmitted ? (
      <h4 className="d-flex justify-content-center mt-5 bg-success text-white p-3 m-5">Well done {firstName} {lastName} ! You are connected with the Email address : {email}</h4> 
    ):(
      <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit} >
        <div className="col-md-4 mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className={`form-control ${firstName ? 'is-valid' : 'is-invalid'}`} id="firstName" onChange={handleFirstNameChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className={`form-control ${lastName ? 'is-valid' : 'is-invalid'}`} id="lastName" onChange={handleLastNameChange} />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className={`form-control ${emailIsValid ? 'is-valid' : 'is-invalid'}`} id="email"onChange={handleEmailChange} />
        </div>
        <div className="col-md-4 mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className={`form-control ${passwordIsValid ? 'is-valid' : 'is-invalid'}`} id="password" onChange={handlePasswordChange}/>
        </div>
        <div className="form-check mb-3">
          <input className={`form-check-input ${rememberMe ? 'is-valid' : 'is-invalid'}`} type="checkbox" value="" id="validationFormCheck1" onChange={handleRememberMeChange}/>
          <label className="form-check-label" htmlFor="validationFormCheck1">Remember me</label>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit" >Submit</button>
        </div>
      </form>
    )}
    </div>
  );
}

export default App;
