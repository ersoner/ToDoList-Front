import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

/* Actions */
import {loginPost} from '../../actions/login';

/* Components */
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import s from './LoginPage.scss'

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    componentDidMount() {
        if (this.props.login !== null) {
            window.location.href = '/home';
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.login !== null) {
            window.location.href = '/home';
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLoginClick = () => {
        const {
            loginPost,
        } = this.props;

        loginPost(this.state.email.toString(), this.state.password.toString());
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={s.paper}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={s.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            onChange={this.handleChangeEmail}
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            onChange={this.handleChangePassword}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"/>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleLoginClick}
                            className={s.submit}>
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/register">
                                    {'Don\'t you have an account? Create Now!'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.loginReducer.login,
});

const mapActionsToProps = {
    loginPost,
};

export const LoginPageComponents = withRouter(connect(mapStateToProps, mapActionsToProps)(LoginPage));
export default LoginPageComponents;
