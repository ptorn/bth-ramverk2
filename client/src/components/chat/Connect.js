import React, { Component } from "react";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
import Config from "../../config";

const ConnectForm = (props) => {
    return (
        <div>
            <p>Fyll i ditt användarnamn för att gå med i chatten.</p>
            <ChatInput
                content = {""}
                placeholder = {"Användarnamn"}
                buttonValue = {"Anslut"}
                callback = {props.callback}
            />
        </div>
    );
};

const ChatForm = (props) => {
    return (
        <div>
            <Chat
                content = {""}
                buttonValue = {"Skicka"}
                messages = {props.messages}
                callback = {props.callback}
                users = {props.users}
            />
        </div>
    );
};

export default class Connect extends Component {
    constructor(props) {
        super(props);
        this.url = "ws://dbwebb.se:1337/echo";
        this.connect = this.connect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        console.log(Config.wsServer);
        this.state = {
            ws: new WebSocket("ws://" + Config.wsServer, "json"),
            nick: "",
            connected: false,
            users: [],
            messages: [],
            loginStatus: "",
        };
    }

    componentDidMount() {
        this.setState((previousState) => {
            previousState.ws.onmessage = (evt) => {
                let data = JSON.parse(evt.data);

                if (data.type === "message") {
                    this.setState((previousState) => {
                        return previousState.messages.push(data.message);
                    });
                }
                if (data.type === "userList") {
                    this.setState((previousState) => {
                        return previousState.users = data.users;
                    });
                }
            };
            return previousState;
        });
    }

    componentWillUnmount() {
        this.state.ws.close();
    }

    connect(content) {
        this.setState((previousState) => {
            return previousState.connected = true;
        });
        this.setState((previousState) => {
            return previousState.nick = content;
        });
        this.state.ws.send(JSON.stringify({
            type: "createUser",
            user: {
                nick: content
            }
        }));
    }

    sendMessage(content) {
        this.state.ws.send(JSON.stringify({
            type: "message",
            nick: this.state.nick,
            message: content
        }));
    }

    render() {
        return (
            <div>
                <h1>Chatt</h1>
                {!this.state.connected &&
                    <ConnectForm
                        callback = {this.connect}
                        status = {this.state.loginStatus}
                    />
                }
                {this.state.connected &&
                    <ChatForm
                        messages = {this.state.messages}
                        callback = {this.sendMessage}
                        users = {this.state.users}
                    />
                }
            </div>
        );
    }
}
