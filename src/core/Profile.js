import React from 'react';
// import firebase from "firebase/app";
import Layout from './Layout'
const Profile = (props) => {
   
    const user = JSON.parse(localStorage.getItem('userData'))
    
       return (
        <Layout>
            {<h3>Welcome {user.name}</h3>}
            {<h2>Your Date of Birth is {user.dob} and birth place is {user.placeofbirth}</h2>}
        </Layout>
    )

}

export default Profile;