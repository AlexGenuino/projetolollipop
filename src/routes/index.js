import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Playlists from '../pages/Playlists';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PlayerSong from '../pages/PlayerSong';
import NewPlaylist from '../pages/NewPlaylist';
import MyPlaylists from '../pages/MyPlaylists'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path ="/" component={Home} exact/>
                <Route path ="/playlists" component={Playlists} exact/>
                <Route path ="/login" component={Login} exact/>
                <Route path ="/register" component={Register} exact/>
                <Route path = "/playersong" component={PlayerSong} exact/>
                <Route path = "/newplaylist" component={NewPlaylist} exact/>
                <Route path = "/mylistplaylist" component={MyPlaylists} exact/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;