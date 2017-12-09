import React, { Component } from 'react';

export default class AddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: "",
            album: "",
            year: ""
        };
    }
    onInputChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                        className="form-control"
                        type="text"
                        id="artist"
                        value={this.state.artist}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="album">Album</label>
                    <input
                        className="form-control"
                        type="text"
                        id="album"
                        value={this.state.album}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">År</label>
                    <input
                        className="form-control"
                        type="number"
                        id="year"
                        value={this.state.year}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.callback(this.state)}
                >
                    Lägg till album
                </button>
            </div>
        );
    }
}
