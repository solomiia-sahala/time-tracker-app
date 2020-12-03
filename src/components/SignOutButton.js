import React from 'react';
import { withFirebase } from './Firebase';
import { withRouter } from "react-router-dom";

const SignOutButton = ({ firebase, history }) => {

    const onSignOut = () => {
        firebase.doSignOut();
        history.push('/login');
    }
    return (
        <button type="button" className="ui button" onClick={onSignOut}>
            Sign Out
        </button>
    )
}


export default withRouter(withFirebase(SignOutButton));