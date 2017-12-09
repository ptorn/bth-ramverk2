import React, { Component } from "react";
import AddAlbum from "./AddAlbum";
import Album from "./Album";

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
        this.addAlbum = this.addAlbum.bind(this);
        this.getReset = this.getReset.bind(this);
        this.updateAlbum = this.updateAlbum.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
    }
    componentDidMount() {
        this.getAllAlbums();
    }
    async addAlbum(album) {
        try {
            console.log(album);
            fetch('/api/albums/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(album)
            });
        } catch (e) {
            console.log(e);
        }
        await this.getAllAlbums();
    }
    async deleteAlbum(album) {
        try {
            console.log(album);
            fetch('/api/albums/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(album)
            });
        } catch (e) {
            console.log(e);
        }
        await this.getAllAlbums();
    }
    async updateAlbum(album) {
        try {
            fetch('/api/albums/update', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(album)
            });
        } catch (e) {
            console.log(e);
        }
        await this.getAllAlbums();
    }
    getAllAlbums() {
        try {
            fetch('/api/albums/listall')
                .then(res => res.json())
                .then(albums => this.setState({ albums }));
        } catch (e) {
            console.log(e);
        }
    }
    async getReset() {
        try {
            await fetch('/api/albums/reset');
            await this.getAllAlbums();
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        let albums = this.state.albums.map((album, i) => {
            return (
                <div className="item col-md-3 mb-20" key={i}>
                    <Album
                        key={i}
                        data={album}
                        updateAlbum={this.updateAlbum}
                        deleteAlbum={this.deleteAlbum}
                    />
                </div>);
        });

        return (
            <div>
                <div className="albums col-md-12">
                    {albums}
                </div>
                <div className="album-input-field col-md-6 col-md-offset-3 mt-20">
                    <AddAlbum callback={this.addAlbum}/>
                    <button
                        className="btn btn-primary mt-20"
                        onClick={this.getReset}>Reset</button
                    >
                </div>
            </div>
        );
    }
}
