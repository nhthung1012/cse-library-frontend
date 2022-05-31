import './SignUp.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="SignUp">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <form>
                <div className="input-Name">
                    <input type="text" name="Name" placeholder="Họ và Tên" required />
                </div>
                <div className="input-MSSV">
                    <input type="text" name="MSSV" placeholder="Mã số sinh viên" required />
                </div>
                <div className="input-PNumber">
                    <input type="text" name="PNumber" placeholder="Số điện thoại" required />
                </div>
                <div className="input-user">
                    <input type="text" name="username" placeholder="User Name" required />
                </div>
                <div className="input-pass">
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className="check-box">
                    <input type="checkbox" id="agree" name="agree" value="agree" />
                    <label for="agree">I read and agree to Terms and Conditions</label>
                </div>
                <div className="button-container">
                    <button type="submit">CREATE ACOUNT</button>
                </div>
            </form>
            <p>
                Already have an acount?{' '}
                <Link to="/Login">
                    <span>Sign in</span>
                </Link>
            </p>
        </div>
    );
}

export default SignUp;
