import React, { Component } from 'react';

export default class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
    }
    onInputChange(event) {
        let value = event.target.value;

        this.setState(() => {
            return {content: value};
        });
    }
    render() {
        return (
            <div className="chat-input-field">
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.content}
                    onChange={this.onInputChange.bind(this)}
                />
                <button onClick={() => this.props.callback(this.state.content)}>
                    {this.props.buttonValue}
                </button>
            </div>
        );
    }
}
