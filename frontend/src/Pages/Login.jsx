import { Link } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register"><span>Register</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
