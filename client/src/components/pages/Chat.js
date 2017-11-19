import React, { Component } from 'react';
import Layout from '../Layout';

class Chat extends Component {
    render() {
        return (
            <Layout>
                <div className="mb-20">
                    <h1>BTH-Ramverk2-Chat</h1>
                    <p>
                        Under kursen Ramverk2 på BTH så ska vi göra en
                        klient/server applikation och jag tänkte göra en chat.
                        Applikationen bygger på en express server och en React client.
                        Meningen med applikationen är att man ska kunna via klienten
                        chatta med andra användare som är kopplade till samma server.
                    </p>
                    <p>
                        Jag har börjat med att skapa en CI-kedja för att
                        löpande ha koll på min kod och dess kvalitet.
                    </p>
                    <p>
                        Ni kan hitta applikationen på github genom att
                        <a
                            href="https://github.com/ptorn/bth-ramverk2-chat"
                            title="bth-ramverk2-chat"
                        > klicka här
                        </a>
                    </p>
                </div>
            </Layout>
        );
    }
}

export default Chat;
