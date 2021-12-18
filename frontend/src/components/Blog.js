import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Characters from './Characters';

class Blog extends Component {
    

    render() {
        return(
            <div id="home">
                <Slider title="Blog" size="slider-small"/>
               <div className="center">
                    {/* Listado de personajes que vendran de la api */}
                    <div id="content" className="characters">
                        <h1 className="subheader">Blog</h1>
                        <Characters component='blog'/>
                    </div>  
                </div>
                <Sidebar blog="true"/>
            </div>
        );
    }
}

export default Blog;
