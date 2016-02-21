import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} />
        );
    }
}
