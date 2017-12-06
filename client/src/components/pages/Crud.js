import React from 'react';
import Layout from "../Layout";
import Albums from "../crud/Albums";

const Crud = () => {
    return (
        <Layout>
            <div>
                <h1>CRUD - Kmom05</h1>
                <p>Nu ska vi testa lite CRUD mot en MongoDB.</p>
                <Albums />
            </div>
        </Layout>
    );
};

export default Crud;
