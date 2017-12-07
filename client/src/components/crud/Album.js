import React, { Component } from 'react';

export default class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data._id,
            artist: this.props.data.artist,
            album: this.props.data.album,
            year: this.props.data.year,
            editAlbum: this.props.editAlbum,
            edit: false
        };
    }
    toggleEdit() {
        let editValue = this.state.edit ? false : true;

        this.setState({edit: editValue});
    }
    onInputChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    render() {
        let album = {
            id: this.props.data._id,
            artist: this.props.data.artist,
            album: this.props.data.album,
            year: this.props.data.year,
        };

        return (
            <div className="album-item">
                { !this.state.edit &&
                    <div className="album-item-content">
                        <div className="artist">{this.state.artist}</div>
                        <div className="album">{this.state.album}</div>
                        <div className="year">{this.state.year}</div>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.toggleEdit()}
                        >
                            Redigera album
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.toggleEdit()}
                        >
                            Radera album
                        </button>
                    </div>
                }
                { this.state.edit &&
                    <div className="album-edit">
                        <div className="album-input-field">
                            <div className="form-group">
                                <label for="artist">Artist</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="artist"
                                    value={this.state.artist}
                                    onChange={this.onInputChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="album">Album</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="album"
                                    value={this.state.album}
                                    onChange={this.onInputChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="year">År</label>
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
                                onClick={() => this.props.callback(album)}
                            >
                                Uppdatera album
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
