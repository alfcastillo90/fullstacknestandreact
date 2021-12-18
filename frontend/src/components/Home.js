import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Characters from './Characters';

class Home extends Component {
    render() {
        
        return(
            <div id="home">
                <Slider title="Bienvenido al curso de react" buttonString="Ir al blog" size="slider-big"/>
                <div className="center">
                    <div id="content" className="characters">
                        <h1 className="subheader">Últimos personajes</h1>
                        <Characters component="last_characters"/>
                    </div>  
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Home;
