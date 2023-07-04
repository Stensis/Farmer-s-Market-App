import React from 'react';
import "../Login screen/login.module.css"
function Login() {
  return (
    <form action="" className="login-form">
      <h3>login now</h3>
      <input type="email" placeholder="your email" className="box" />
      <input type="password" placeholder="your password" className="box" />
      <p>forget your password <a href="/">click here</a></p>
      <p>don't have an account <a href="/">create now</a></p>
      <input type="submit" value="login now" className="btn" />
    </form>
  );
}

export default Login;
