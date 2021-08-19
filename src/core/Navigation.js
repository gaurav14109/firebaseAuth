import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {signOut, isAuthenticated} from '../auth'

const Navigation = ({history}) => {
    const isActive = (history, path) => {
        if (history.location.pathname === path) {

            return {color: '#ff9900'}
        } else {
            return {color: '#ffffff'}
        }
    }
    return (
        <ul
            className='nav nav-tabs bg-primary'
            style={{
                width: '30%',
                margin: "20px auto"
            }}>

            {
                isAuthenticated() && <li className='nav-item'>
                        <Link className='nav-link' to='/profile' style={isActive(history, '/profile')}>Profile</Link>
                    </li>
            }
            {
                !isAuthenticated() && <li className='nav-item'>
                        <Link className='nav-link' to='/signin' style={isActive(history, '/signin')}>Signin</Link>
                    </li>
            }
            {
                !isAuthenticated() &&< li className = 'nav-item' > <Link className='nav-link' to='/signup' style={isActive(history, '/signup')}>Signup</Link>
                </li>
            }
            {
                isAuthenticated() && <li>

                        <span
                            className='nav-link'
                            onClick={() => signOut(() => {
                                history.push('/')
                            })}
                            style={{
                                cursor: 'pointer',
                                color: "#ffffff"
                            }}>SignOut</span>
                    </li>
            }

        </ul>
    )

}

export default withRouter(Navigation);;