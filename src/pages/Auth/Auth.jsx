import "./Auth.css"
import Logo from "../../img/logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
const Auth = () => {
  const [login, setlogin] = useState(false)
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>ZKC Media</h1>
          <p>Explore the ideas throughout the world</p>
        </div>
      </div>
      {login ? <Login setlogin={setlogin} /> : <SignUp setlogin={setlogin}/>}
      
    </div>
  )
}
function Login({setlogin}) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sigh Up</h3>
        <div className="form">
          <div>
            <input type="text" placeholder="First Name" className="infoInput" name="firstName" />
          </div>
          <div>
            <input type="text" placeholder="password" className="infoInput" name="password" />
          </div>
        </div>
        <div>
          <span style={{ fontSize: "19px" }} onClick={()=>setlogin(false)}>Don't have an account, Sign Up</span>
        </div>
        <div className="buttons">
          <Link to="/">
          <button className="button" type="button">Back</button>
          </Link>
          <button className="button" type="button">Login</button>
        </div>
      </form>
    </div>
  )
}
function SignUp({setlogin}) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sigh Up</h3>
        <div className="form">
          <div>
            <input type="text" placeholder="First Name" className="infoInput" name="firstName" />
            <input type="text" placeholder="Last Name" className="infoInput" name="lastName" />
          </div>
          <input type="text" placeholder="User Name" className="infoInput" name="userName" />
          <div>
            <input type="text" placeholder="password" className="infoInput" name="password" />
            <input type="text" placeholder="Confirm Password" className="infoInput" name="confirmPassword" />
          </div>
        </div>
        <div>
          <span style={{ fontSize: "19px" }} onClick={()=>setlogin(true)}>Already have an account . Login!</span>
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="button" type="button">Back</button>
          </Link>
          <button className="button" type="button">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default Auth