import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Error'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import Blog from './components/Blog';
import Character from './components/Character';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                    {/** Routes and pages configuration */}
                    <Switch>
                        <Route exact path="/" component= { Home } />
                        <Route exact path="/blog" component= { Blog } />
                        <Route exact path="/blog/personaje/:id" component= { Character } />
                        <Route component={Error} />
                    </Switch>
                    <div className="clearfix"></div>
                    <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;
