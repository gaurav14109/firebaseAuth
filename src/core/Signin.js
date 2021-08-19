import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom'
import firebase from "firebase/app";
import {authenticated} from '../auth'
import {db} from '../index'
const Signin = () => {
    const [userSignin, setUserSignin] = useState(
        {email: '', password: '',redirect: false, error:''}
    )
    const handleInput = name => e => {

        setUserSignin({
            ...userSignin,
            [name]: e.target.value
        });
    }
    const {email, redirect, password} = userSignin
    const signin = () => {

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
               
                var userRef = db
                    .collection("users")
                    .doc(userCredential.user.uid);
                userRef
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            
                            const user = firebase
                                .auth()
                                .currentUser

                            authenticated(user, doc.data(), function () {
                                setUserSignin({
                                    ...userSignin,
                                    redirect: true,
                                    userdata: doc.data()
                                })
                            })

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    })
                    // ...
                })
            .catch((error) => {
                // var errorCode = error.code;
                setUserSignin({
                    ...userSignin,
                    error:error.message
                })
            });
    }

    const redirectSignUpUser = () => {
        if (redirect) {

            return <Redirect to="/profile"/>
        }
    }

    return (
        <div
            style={{
                width: '30%',
                margin: "20px auto"
            }}>
            <h3>Welcome to Signin</h3>
            <form>
                <div className="form-group">
                    <label className='text-muted'><strong>email</strong></label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleInput('email')} required/>
                </div>
                <div className="form-group">
                    <label className='text-muted'><strong>Password</strong></label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleInput('password')} required/>
                </div>

            </form>
            <button onClick={signin} className = "btn btn-primary">Submit</button>
            {redirect && redirectSignUpUser()}

            
            <button onClick={signin} className = "btn btn-primary ml-2"><Link to="/signup" style={{color:"white"}}>signup</Link></button>
        </div>
    )

}

export default Signin;
