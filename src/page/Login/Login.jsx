import React,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate, Link } from "react-router-dom";
import classNames from 'classnames/bind'
import style from "./Register.module.scss"

const cx=classNames.bind(style)

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={cx("container")}>
        <div className={cx("wrapper")}>
            <h2 className={cx("logo")}>VDChat</h2>
            <h5 className={cx("title")}>Register</h5>
            <form>
              <input type='email' placeholder='Email'/>
              <input type='password' placeholder='Password'/>
              <button onClick={handleSubmit}>Sign in</button>
            </form>
            <p>You don't have an account ? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login