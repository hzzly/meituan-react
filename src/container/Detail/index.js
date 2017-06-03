import React, { Component } from 'react';

import Header from '../../components/Header'

class Detail extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <Header title="商户详情">
                    <i className="icon">&#xe622;</i>
                    <i></i>
                </Header>
                <div className="content-wrap">
                    Detail
                    {this.props.match.params.id}
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.match.path.split('/').length)
    }
}

export default Detail;