import React, {useContext} from "react";
import UserContext from '../context/UserContext'

function Profile(){
    const {user} = useContext(UserContext);
    
    if(!user) 
        return (<div>Please Login</div>)

    return(
        <div>
            <h2>Profile</h2>
            <h3>Welcome {user}</h3>
        </div>
    )
}

export default Profile ;