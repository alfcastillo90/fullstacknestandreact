import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import logo from '../assets/images/logo.svg';
import Moment from 'react-moment';
import 'moment/locale/es';
class Characters extends Component {
    state = {
        characters: {},
        status: null
    };

    url = Global.url;

    getCharacters() {
        axios.get(this.url+'characters').then(response => {
            console.log(response.data);

            this.setState({
                characters: response.data.characters,
                status: 'success'
            });

        }, error => {
            console.log(error);
        });
    }

    getCharactersBySearch(searched) {
        axios.get(this.url+'search/'+ searched).then(response => {
            console.log(response.data);
            this.setState({
                characters: response.data.characters,
                status: 'success'
            });

        }).catch(error => {
            console.log('aqui');
            this.setState({
                characters: [],
                status: 'success'
            });
        })
    }

    getLastCharacters() {
        axios.get(this.url+'characters/true').then(response => {
            console.log(response.data);

            this.setState({
                characters: response.data.characters,
                status: 'success'
            });

        });
    }

    componentWillMount() {
        const component = this.props.component;
        const search = this.props.search;
        if(component === 'blog') {
            this.getCharacters();
        } else if (component === 'last_characters') {
            this.getLastCharacters();
        } else if (component === 'search' && search && search !== null && search !== 'undefined') {
            this.getCharactersBySearch(search);
        }
       
    }

    render() {
        if (this.state.characters.length >= 1) {
            const listCharacters = this.state.characters.map((character) => {
                return (
                    <character key={character._id} className="character-item" id="character-template">
                        <div className="image-wrap">
                            { 
                                character.image !== null ? (
                                    <img src={ this.url + 'get-image/'+character.image } alt={character.title} />
                                ): (
                                    <img src={ logo } alt={character.title} />
                                )
                            }
                        </div>
                        <h2 className="subheader">{character.title}</h2>
                        <span className="date">
                            <Moment fromNow locale='es'>{character.date}</Moment>
                        </span>
                        <Link to={'/blog/personaje/'+ character._id }> Leer más </Link>
                        <div className="clearfix"></div>
                  </character>
                );
            });

            return (
                <div id="characters" className="posts">
                    {listCharacters}
                </div>
            );
        } else if (this.state.characters.length === 0 && this.state.status === 'success') {
            return (
                <div id="characters">
                    <h2 className="subheader">No hay personajes para mostrar</h2>
                    <p>Todavía no hay contenido en esta sección</p>
                </div>
            );
        } else {
            return (
                <div id="characters">
                    <h1 className="subheader">Cargando...</h1>
                    <p>Espere mientras este cargando</p>
                </div>
            );
        }

    }
}

export default Characters
