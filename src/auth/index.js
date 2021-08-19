import firebase from "firebase/app";
export const authenticated = (user, userdata,next)=>{  //should be authenticated instead of authenticate
    //check windowObject is there or not
if (typeof window !== 'undefined'){
    localStorage.setItem('user', user);
   
    localStorage.setItem('userData', JSON.stringify(userdata));
    
     //have both token and id
    next();//callback function
}

}

export const isAuthenticated =()=>{
    //check windowObject is there 
    if (typeof window === 'undefined'){
        return false;
    }

    if (localStorage.getItem('user')){

        return localStorage.getItem('user') //pasrsing into json object since it stored as string in localStorage
    }
    else{
        return false
    }

}

export const signOut = (next) => {


    // [START auth_sign_out]
    if (typeof window !== 'undefined'){
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.

            localStorage.removeItem('user')
            localStorage.removeItem('userData')
            
            next();
        })
        .catch((error) => {
            // An error happened.
            console.log(error)
        });
    // [END auth_sign_out]
}
}