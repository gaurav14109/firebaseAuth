import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import firebase from "firebase/app";
// import {authenticated} from '../auth'
import {db} from '../index'
const Signup = () => {
    const [userSignUp, setUserSignup] = useState({
        email: '',
        name: '',
        dob: '',
        placeofbirth: '',
        password: '',
        redirect: false
    })
    const [passwordMatch, setPasswordMatch] = useState(false)
    const {
        email,
        name,
        dob,
        placeofbirth,
        redirect,
        password
    } = userSignUp
    const signup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                /*             console.log(userCredential.user.getIdToken().then(token => {
                    console.log(token)
                    authenticate(token, function () {
                        setRedirect(true)
                    })
                }).catch(error => {
                    console.log(error)
                }))
    */
                const user = {}
                
                user.name = name
                user.dob = dob
                user.placeofbirth = placeofbirth

                return db
                    .collection('users')
                    .doc(userCredential.user.uid)
                    .set(user)
            })
            .then(() => {
                console.log('User Signed up Successfully')
                setUserSignup({
                    name: '',
                    email: '',
                    dob: '',
                    placeofbirth: '',
                    redirect: true,
                    password: ''
                })
            })
            .catch((error) => {
                // var errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const redirectSignUpUser = () => {
        if (redirect) {

            return <Redirect to='/signin'/>
        }
    }

    const handleInput = name => e => {

        setUserSignup({
            ...userSignUp,
            [name]: e.target.value
        });
    }
    const checkPassword = (e) => {

        if (e.target.value === password) {
            setPasswordMatch(true)
        }

    }
    return (
        <div
            style={{
                width: '30%',
                margin: "20px auto"
            }}>
            <h3>Welcome to Signup</h3>
            <form>
                <div className='form-group'>
                    <label className='text-muted'>
                        <strong>email</strong>
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleInput('email')}/>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>
                        <strong>password</strong>
                    </label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleInput('password')}/>
                </div>
                
                <div className="form-group">
                    <label className='text-muted'>
                        <strong>Confirm Password</strong>
                    </label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        onChange={checkPassword}
                        required="required"/>
                </div>
                {passwordMatch&&<span><strong>Password Matched</strong></span>}
                <div className='form-group'>
                    <label className='text-muted'>
                        <strong>Place of Birth</strong>
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name='placeofbirth'
                        value={placeofbirth}
                        onChange={handleInput('placeofbirth')}/>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>
                        <strong>Date of Birth</strong>
                    </label>
                    <input
                        className='form-control'
                        type='date'
                        name='dob'
                        value={dob}
                        onChange={handleInput('dob')}/>
                </div>
                <div className='form-group'>
                    <label className='text-muted'>
                        <strong>Username</strong>
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleInput('name')}/>
                </div>

            </form>
            <button className='btn btn-primary' onClick={signup}>Submit</button>
            {redirect && redirectSignUpUser()}
        </div>
    )

}

export default Signup;