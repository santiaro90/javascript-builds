import React from 'react';
import ReactDom from 'react-dom';

import Button from './button.jsx';
import Input from './input.jsx';

export default class Form extends React.Component {
    onSubmit(e) {
        e.preventDefault();

        let inputValue = ReactDom.findDOMNode(this.refs.input).value;
        alert(inputValue);
    }

    render() {
        return (
            <form action='' onSubmit={this.onSubmit.bind(this)}>
                <legend>{this.props.title}</legend>
                <div className='group'>
                    <Input ref='input' type='text' placeholder='Text here...' />
                    <Button label='Go!' />
                </div>
            </form>
        );
    }
}
