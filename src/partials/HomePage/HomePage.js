import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import Header from "../../components/Header";

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='col-xs-6 col-xs-offset-3'>
                <div className='row'>
                    <Header/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export const HomePageComponents = withRouter(connect(mapStateToProps, mapActionsToProps)(HomePage));
export default HomePageComponents;
