import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { withFirebase } from './Firebase';
import ErrorMessage from './ErrorMessage';


class LogInPageBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(error => this.setState({ error }))
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="ui container">
                <div className="ui center aligned container large header">Log in page</div>
                <form onSubmit={this.onSubmit} className="ui form" autocomplete="off">
                    <div className="field">
                        <label>Email</label>
                        <input name="email" value={email} onChange={this.onChange} type="email" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input name="password" value={password} onChange={this.onChange} type="password" />
                    </div>
                    {error && <ErrorMessage error={error} />}
                    <button type="submit" className="ui button">Log In</button>
                </form>
                <div>Don`t have an account? Go to <Link to="/signIn">Sign in Page</Link></div>
            </div >
        )
    }
}


const LogInPage = withRouter(withFirebase(LogInPageBase))

export default LogInPage;