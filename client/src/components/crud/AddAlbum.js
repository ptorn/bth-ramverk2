import React, { Component } from 'react';

export default class AddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                artist: "",
                album: "",
                year: ""
            },
        };
    }
    onInputChange(event) {
        let state = this.state;
        let type = event.target.id;
        let value = event.target.value;

        state.content[type] = value;
        this.setState(state => state);
    }
    render() {
        return (
            <div className="album-input-field">
                <div className="form-group">
                    <label for="artist">Artist</label>
                    <input
                        className="form-control"
                        type="text"
                        id="artist"
                        value={this.state.content.artist}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label for="album">Album</label>
                    <input
                        className="form-control"
                        type="text"
                        id="album"
                        value={this.state.content.album}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label for="year">År</label>
                    <input
                        className="form-control"
                        type="number"
                        id="year"
                        value={this.state.content.year}
                        onChange={this.onInputChange.bind(this)}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.callback(this.state.content)}
                >
                    Lägg till album
                </button>
            </div>
        );
    }
}
