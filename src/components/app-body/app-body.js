import React,{Component} from 'react';
import SwapiService from '../../services/swapi-service';
import "./app-body.css";


import RandomPlanet from './random-planet';
import AllPeople from './all-people';
import SelectedPeople from './selected-people';
import ErrorIndicator from '../error-indicator';

import ListItems from './list-items/list-items';
import SelectedItem from './selected-item';
import PeoplePage from './people-page/people-page';

///new

export default class AppBody extends Component{
    swapiServ = new SwapiService();
    state={
        selectedPeople:null,
        error:false///!
    }
    setSelectedPeople = (selectedPeople) => {
        this.setState({selectedPeople})
    }
    componentDidCatch=()=>{
        this.setState({error:true})
    }
//////Выбор планеты
    render=()=>{

        if(this.state.error){
            return <ErrorIndicator/>
        }
        return (
            
            <div className="app-body col-sm-12">
                <RandomPlanet swapiServ={this.swapiServ} />
                <PeoplePage/>
          
       
            </div>
            
        )
    }
}