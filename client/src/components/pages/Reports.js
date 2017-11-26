import React, { Component } from 'react';
import Layout from '../Layout';
import NavReports from '../NavReports';

import ReactMarkdown from "react-markdown";

export default class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: {
                content: "Vänta ett ögonblick medans vi hämtar rapporten.",
                title: "Laddar!"
            }
        };
    }

    componentDidMount() {
        this.getReport(this.props.match.params.report);
    }

    componentWillReceiveProps(nextProps) {
        this.getReport(nextProps.match.params.report);
    }

    getReport(report) {
        if (!report) {
            report = "index";
        }
        fetch('/api/reports/' + report)
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
