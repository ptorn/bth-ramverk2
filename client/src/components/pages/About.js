import React from 'react';
import Layout from "../Layout";

const About = () => {
    return (
        <Layout>
            <div>
                <h1>Om Ramverk 2</h1>
                <p>Detta är min hemsida för kursen Ramverk2 på BTH.</p>
                <p>Här ska vi jobba mer med JavaScript programmering,
                    docker, tester och annat ramverk relaterat.</p>
                <p>Denna sidan kan ni hitta på
                    <a href="https://github.com/ptorn/bth-ramverk2" title="bth-Ramverk2 på GitHub">
                        GitHub
                    </a>
                </p>
                <p>Vill ni läsa mer om kursen så kan ni läsa på
                    <a href="https://dbwebb.se/kurser/ramverk2" title="Dbwebb Ramverk2">
                        kursens hemsida
                    </a>
                </p>
                <div className="col-md-6">
                    <img src="/images/React_logo_wordmark.png" className="img-responsive"></img>
                </div>
            </div>
        </Layout>
    );
};

export default About;
