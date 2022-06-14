import './Login.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, setState } from 'react';

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'password') {
            setPassword(value);
        }
        if (id === 'username') {
            setUsername(value);
        }
    };

    const handleSubmit = (e) => {
        console.log(username, password);
        e.preventDefault();
    };

    return (
        <div className="Login">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <form>
                <div className="input-container">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="UserName"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Password"
                        required
                    />
                    <div className="check-box-container">
                        <div className="check-box">
                            <input type="checkbox" id="remember" name="remember" value="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                        <a href="/">Forgot your password?</a>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                        LOGIN
                    </button>
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
