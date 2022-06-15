import './SignUp.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState, setState } from 'react';

function SignUp() {
    const [name, setName] = useState(null);
    const [ID, setID] = useState(null);
    const [phone, setPhone] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'name') {
            setName(value);
        }
        if (id === 'ID') {
            setID(value);
        }
        if (id === 'phone') {
            setPhone(value);
        }
        if (id === 'password') {
            setPassword(value);
        }
        if (id === 'username') {
            setUsername(value);
        }
    };

    const handleSubmit = (e) => {
        console.log(name, ID, phone, username, password);
        e.preventDefault();
    };

    return (
        <div className="SignUp">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <form>
                <div className="input-container">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Họ và Tên"
                        required
                    />
                    <div className="input-container-line2">
                        <input
                            type="text"
                            id="ID"
                            value={ID}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Mã số sinh viên"
                            required
                        />
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => handleInputChange(e)}
                            placeholder="Số điện thoại"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="User Name"
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
                </div>
                <div className="check-box">
                    <input type="checkbox" id="agree" name="agree" value="agree" />
                    <label for="agree">I read and agree to Terms and Conditions</label>
                </div>
                <div className="button-container">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>
                        CREATE ACOUNT
                    </button>
                </div>
            </form>
            <p>
                Already have an acount?{' '}
                <Link to="/SignIn">
                    <span>Sign in</span>
                </Link>
            </p>
        </div>
    );
}

export default SignUp;
