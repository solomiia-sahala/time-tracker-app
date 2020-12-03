import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from './Firebase';
import ErrorMessage from './ErrorMessage';

class SignInPageBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            error: null,
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(error => this.setState({ error }))
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const {
            name,
            surname,
            email,
            password,
            error
        } = this.state;

        return (
            <div className="ui container">
                <div className="ui center aligned container large header">Sign in page</div>
                <form onSubmit={this.onSubmit} className="ui form" autocomplete="off">
                    <div className="field">
                        <label>Name</label>
                        <input name="name" value={name} onChange={this.onChange} type="text" />
                    </div>
                    <div className="field">
                        <label>Surname</label>
                        <input name="surname" value={surname} onChange={this.onChange} type="text" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input name="email" value={email} onChange={this.onChange} type="email" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input name="password" value={password} onChange={this.onChange} type="password" />
                    </div>
                    <button type="submit" className="ui button">Sign In</button>
                    {error && <ErrorMessage error={error}/>}
                </form>
                <div>Already registered? Go to <Link to="/logIn">Log in Page</Link></div>
            </div >
        )
    }
}


const SignInPage = withRouter(withFirebase(SignInPageBase));

export default SignInPage;


