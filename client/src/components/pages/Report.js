import React, { Component } from 'react';
import Layout from "../Layout";
import { Link } from 'react-router-dom'

class Report extends Component {
    state = {report: ""}

    componentDidMount() {
        fetch('/reports/kmom01')
            .then(res => res.json())
            .then(report => this.setState({ report }));
    };

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
                    <h1>{this.state.report.title}</h1>
                    <Link to="#" onClick={() => this.getReport("kmom01")}>Kmom01 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom02")}>Kmom02 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom03")}>Kmom03 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom04")}>Kmom04 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom05")}>Kmom05 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom06")}>Kmom06 | </Link>
                    <Link to="#" onClick={() => this.getReport("kmom10")}>Kmom10 </Link>
                    <div className="content">
                        {this.state.report.content}
                    </div>
                </div>
            </Layout>
        );
    }
}
export default Report;
