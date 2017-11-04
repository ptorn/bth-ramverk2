import React, { Component } from 'react';
import Layout from '../Layout';
import NavReports from '../NavReports';

import ReactMarkdown from "react-markdown";

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: {
                content: "",
                title: ""
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
export default Report;
