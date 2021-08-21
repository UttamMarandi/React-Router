import React from 'react'
import { Link, Switch,Route, useHistory, useRouteMatch} from 'react-router-dom'
import { useEffect } from 'react'
import ViewProfile from '../components/ViewProfile'
import EditProfile from '../components/EditProfile'
//login is passed to Profile component 
const Profile = ({login}) => {

    // const history = useHistory()
    // console.log("useHistory() return", history);
    // console.log("login in profile", login);
    // useEffect(() => {
    //     if(!login) {
    //         history.push('/about')
    //     }
        
    // }, [login , history])

   const {path , url} = useRouteMatch()
   console.log("path in useRouteMatch", path);
   console.log("url in useRouteMatch", url);
   //both log /profile

    return (
        <>
            <h1>Profile Page</h1>
            <ul>
                <li>
                    <Link to={`${url}/viewprofile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>
            
            <Switch>
                <Route path = {`${path}/viewprofile`} component = {ViewProfile} />
                <Route path = {`${path}/editprofile`}component = {EditProfile}/>
            </Switch>
        </>
    )
}

export default Profile
