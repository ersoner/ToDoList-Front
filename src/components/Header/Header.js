import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Header.scss';
import {loginPost, setLogin} from "../../actions/login";
import {connect} from "react-redux";

class Header extends React.PureComponent {
    handleOnClick = () => {
        setLogin(null);
        window.location.href = '/login'
    };

    render() {
        return (
            <header className='header col-xs-12'>
                <div className='col-xs-6'>
                    <Link to='/'>Homepage</Link>
                </div>
                <div onClick={this.handleOnClick} className='col-xs-6 text-right'>Huawei Challenge</div>
            </header>
        );
    }
};

const mapStateToProps = (state) => ({
    login: state.loginReducer.login,
});

const mapActionsToProps = {
    setLogin,
};

export const HeaderPage = withRouter(connect(mapStateToProps, mapActionsToProps)(Header));
export default HeaderPage;
