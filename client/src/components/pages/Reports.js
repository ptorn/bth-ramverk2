import React, { Component } from 'react';
import Layout from '../Layout';
import NavReports from '../NavReports';
import ReactMarkdown from "react-markdown";

class Reports extends Component {
    constructor() {
        super();
        this.state = {
            report: {
                content: "hej",
                title: ""
            }
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('/reports')
            .then(res => res.json())
            .then(report => this.setState({ report }));
    }

    getReport(report) {
        console.log(report);
        fetch('/reports/' + report)
            .then(res => res.json())
            .then(report => this.setState({ report }));
    }

    render() {
        return (
            <Layout>
                <div className="App">
                    <NavReports />
                    <div className="content">
                        <ReactMarkdown source={this.state.report.content} />
                    </div>
                </div>
            </Layout>
        );
    }
}
export default Reports;