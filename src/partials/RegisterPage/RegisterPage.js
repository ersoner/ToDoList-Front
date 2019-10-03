import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {connect} from 'react-redux';

import s from './RegisterPage.scss'
import {registerPost} from "../../actions/register";


class RegisterPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
        };
    }

    componentDidMount() {
        if (this.props.register !== null) {
            window.location.href = '/home';
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.register !== null) {
            window.location.href = '/home';
        }
    }

    handleChangeFullName = (event) => {
        this.setState({
            fullname: event.target.value,
        });
    };

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleRegisterClick = () => {
        const {
            registerPost,
        } = this.props;

        registerPost(this.state.fullname.toString(),this.state.email.toString(), this.state.password.toString());
    };

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={s.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={s.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="fname"
                                    name="fullname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    autoFocus
                                    onChange={this.handleChangeFullName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChangePassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={s.submit}
                            onClick={this.handleRegisterClick}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
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
    register: state.registerReducer.register,
});


const mapActionsToProps = {
    registerPost,
};

export const RegisterPageComponents = withRouter(connect(mapStateToProps, mapActionsToProps)(RegisterPage));
export default RegisterPageComponents;
