import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import logo from '../assets/images/logo.svg';
import Moment from 'react-moment';
import { Link, Redirect } from 'react-router-dom';

class Character extends Component {
    url = Global.url;

    state = {
        character: {},
        status: null
    }

    getCharacter = () => {
        const id = this.props.match.params.id;
        axios.get(this.url+'character/'+ id).then(response => {
            console.log(response.data);
            this.setState({
                character: response.data.character,
                status: 'success'
            });
        }).catch(error => {
            this.setState({
                character: false,
                status: 'success'
            });
        });
    }

    componentWillMount() {
        this.getCharacter();
    }

    render() {
        const character = this.state.character;

        if (this.state.status === 'deleted') {
            return <Redirect to='/blog' />;
        }

        return (
            <div className="center">
                <section  id="content">

                    {this.state.character &&
                        <character className="character-item character-detail">
                            <div className="image-wrap">
                            {
                                character.image !== null ? (
                                    <img src={ this.url + 'get-image/'+character.image } alt={character.title} />
                                ): (
                                    <img src={ logo } alt={character.title} />
                                )
                            }
                            </div>
                            <h1 className="subheader">{character.title}</h1>
                            <span className="date"><Moment fromNow>{character.date}</Moment></span>
                            <p>{ character.content }</p>
                            <div className="clearfix"></div>
                        </character>
                    }
                    {!this.state.character && this.state.status === 'success' &&
                        <div id="character">
                            <h2 className="subheader">El personaje no existe</h2>
                            <p>Intentelo de nuevo mas tarde</p>
                        </div>
                    }
                    {!this.state.status == null &&
                        <div id="character">
                            <h2 className="subheader">Cargando</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }
                </section>
                <Sidebar/>
                <div className="clearfix"></div>
            </div>
        );
    }
}
export default Character
