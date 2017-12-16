import React, { Component } from 'react';
import Layout from '../Layout';

export default class Gomoku extends Component {
    render() {
        return (
            <Layout>
                <div className="mb-20">
                    <h1>BTH-Ramverk2-Gomoku</h1>
                    <p>
                        Under kursen Ramverk2 på BTH så ska vi göra en
                        klient/server applikation och jag tänkte göra spelet Gomoku.
                        Applikationen bygger på en express server och en React client.
                        Meningen med applikationen är att man ska kunna via klienten
                        chatta och spela med andra användare som är kopplade till samma server.
                    </p>
                    <p>
                        Jag har börjat med att skapa en CI-kedja för att
                        löpande ha koll på min kod och dess kvalitet.
                    </p>

                    <p>
                        <h3>Gomoku Server</h3>
                        <ul>
                            <li>Express för att serva sidan och ett RESTapi för klienten</li>
                            <li>MongoDB för att lagra data om spel och spelare.</li>
                            <li>WebSockets för att hantera live-anslutningar</li>
                            <li>bth-mongodb-crud vilket är min modul för att
                                hantera CRUD. Modulen finns
                                <a
                                    href="https://www.npmjs.com/package/bth-mongodb-crud"
                                    title="bth-mongodb-crud"
                                >
                                    NPM bth-mongodb-crud
                                </a>
                            </li>
                        </ul>
                        <h3>Gomoku Klient</h3>
                        <ul>
                            <li>React</li>
                            <li>WebSockets för kommunikation mot RESTful servern.</li>
                            <li>Chatmodulen som vi skrev tidigare för att chatta
                                medans man spelar.
                            </li>
                        </ul>
                    </p>
                    <p>
                        Ni kan hitta applikationen på github genom att
                        <a
                            href="https://github.com/ptorn/bth-ramverk2-gomoku"
                            title="bth-ramverk2-gomoku"
                        > klicka här
                        </a>
                    </p>
                </div>
            </Layout>
        );
    }
}
