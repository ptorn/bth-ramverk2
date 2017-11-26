import React, { Component } from "react";
import ChatInput from "./ChatInput";

const ChatLine = (props) => {
    let time = new Date(props.time);
    let getTime = ('0' + time.getHours()).slice(-2) + ":" + ('0' + time.getMinutes()).slice(-2);
    let nick = (props.nick === "" ? "-" : "<" + props.nick + ">");

    return (
        <li>[{getTime}] {nick} {props.message}</li>
    );
};

const ChatWindow = (props) => {
    let messagesHtml = props.messages.map((message, id) => {
        return (
            <ul>
                <ChatLine
                    key={id}
                    nick = {message.nick}
                    message = {message.message}
                    time = {message.time}
                />
            </ul>
        );
    });

    return (
        <div>
            {messagesHtml}
        </div>
    );
};

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
        };
    }
    render() {
        let users = this.props.users.map((item) => {
            return <b>{item} </b>;
        });

        return (
            <div>
                <div className="chat-window">
                    <ChatWindow
                        messages = {this.props.messages}
                    />
                </div>
                <ChatInput
                    content = {this.state.content}
                    buttonValue = {this.props.buttonValue}
                    callback = {this.props.callback}
                />
            <p>Inloggade:</p>
                {users}
            </div>
        );
    }
}
