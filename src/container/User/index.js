import React, { Component } from 'react';
import Header from '../../components/Header'

class User extends Component {
    render() {
        return (
            <div>
                <Header title="个人中心">
                    <i></i>
                    <i className="icon">&#xe62b;</i>
                </Header>
                <div className="content-wrap">
                    User
                </div>
            </div>
        );
    }
}

export default User;