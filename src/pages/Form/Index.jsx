
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "../Form/S.css";
import { useRef } from 'react';

const Form = () => {

    const printRef = useRef(null);

    const handlePrint = () => {
        const printContent = printRef.current;
        window.print(printContent);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!newEmail || !/\S+@\S+\.\S+/.test(newEmail)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (!newPassword || newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        }
        else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        }
        else if (!password.match(/[a-z]/)) {
            setPasswordError('Password must contain at least one lowercase letter');
        }
        else if (!password.match(/[A-Z]/)) {
            setPasswordError('Password must contain at least one uppercase letter');
        }
        else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || emailError || passwordError) {
            alert('Please fill in all fields correctly');
        } else {
            // submit form
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    return (
        <Container id="print-window" ref={printRef}>
            <Row>
                <Col>
                    <h1 className='my-5'>Login Page Validations</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className='mb-3'>Email:</label><br />
                        <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-50 rounded" placeholder='Enter Email' />
                        <div>
                            {emailError && <span className='text-danger'>{emailError}</span>}
                        </div>

                        <br />
                        <label htmlFor="password" className='mb-3'>Password:</label><br />
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-50 rounded" placeholder='Enter Password' />
                        <div>
                            {passwordError && <span className='text-danger'>{passwordError}</span>}
                        </div>

                        <br />
                        <button type="submit" className='bg-info rounded'>Submit</button>
                    </form>
                    <button onClick={handlePrint}>Print</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Form;
