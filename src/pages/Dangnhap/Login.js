import './Login.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <form>
                <div className="input-container-user">
                    <input type="text" name="uname" placeholder="UserName" required />
                </div>
                <div className="input-container-pass">
                    <input type="password" name="pass" placeholder="Password" required />
                </div>
                <div className="button-container">
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            <div className="check-box">
                <input type="checkbox" id="remember" name="remember" value="remember" />
                <label for="remember">Remember me</label>
            </div>
            <p className="forgot">
                <a href="/">Forgot your password?</a>
            </p>
            <p>
                Don't have an account?{' '}
                <Link to="/">
                    <span>Sign up</span>
                </Link>
            </p>
            <div className="stick-1"></div>
            <div className="stick-2"></div>
            <span className="or">OR</span>
        </div>
    );
}

export default Login;
