import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

const Auth = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const isSignUp = location.pathname === '/signup';

    const handleAuth = () => {
        if (isSignUp) {
        
            if (username && password && confirmPassword && dob && address && mobile) {
                if (password === confirmPassword) {
                    
                    login({ username, password, gender, dob, address, mobile });
                    navigate('/products');
                } else {
                    alert('Passwords do not match.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        } else {
        
            if (username && password) {
                login({ username, password });
                navigate('/products');
            } else {
                alert('Please enter both username and password.');
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="auth-input"
            />
            
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="auth-input"
            />

            {isSignUp && (
                <>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="auth-input"
                    />

                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="auth-select"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="auth-input"
                    />

                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                        className="auth-input"
                    />

                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter Mobile Number"
                        className="auth-input"
                    />
                </>
            )}

            <button onClick={handleAuth} className="auth-button">
                {isSignUp ? 'Create Account' : 'Login'}
            </button>
        </div>
    );
};

export default Auth;
