import './Login.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, setState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../utils/constants';
import { useUser } from '../../hooks/user';

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'password') {
            setPassword(value);
        }
        if (id === 'username') {
            setUsername(value);
        }
    };

    const [_, setUser] = useUser();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`${BACKEND_URL}/session/password`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
            credentials: 'include'
        });
        if (res.ok) {
            alert("đăng nhập thành công")
            const body = await res.json();
            setUser({
                name: body.lname + ' ' + body.fname,
                role: body.admin === null ? 'student' : 'admin'
            })
            navigate("/ViTri")
        } else {
            alert(await res.text());
        }
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
