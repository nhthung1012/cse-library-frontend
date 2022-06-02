import './Login.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Login">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="text" name="uname" placeholder="UserName" required />
                    <input type="password" name="pass" placeholder="Password" required />
                    <div className="check-box-container">
                        <div className="check-box">
                            <input type="checkbox" id="remember" name="remember" value="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                        <a href="/">Forgot your password?</a>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            <div className="footer">
                <p>
                    Don't have an account?{' '}
                    <Link to="/SignUp">
                        <span>Sign up</span>
                    </Link>
                </p>
                <div className="other-account">
                    <div className="stick"></div>
                    <span>OR</span>
                    <div className="stick"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
