import React,{Component} from 'react';
import "./app-header.css";

export default class AppHeader extends Component{
    render=()=>{
       return( 
            <div className="app-header">
                <div className="Nav-logo">Star DB</div>
                <ul>
                    <li className="Nav-item">People</li>
                    <li className="Nav-item">Planets</li>
                    <li className="Nav-item">Starships</li>
                </ul>
            </div>)
    }       
}