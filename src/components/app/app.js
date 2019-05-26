import React,{Component} from 'react';
import AppHeader from '../app-header';
import AppBody from '../app-body';
import './app.css'

export default class App extends Component{

    render=()=>{
    return(
        <div className="container-fluid">
            <div className="wrapper-container">
                <AppHeader/>
                <AppBody
                />
            </div>
        </div>
    )
}
}

