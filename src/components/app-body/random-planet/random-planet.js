import React,{Component} from 'react';
import SwapiService from '../../../services/swapi-service';
import './random-planet.css';
import PlanetView from '../planet-view';
import Loader from '../../loader';

export default class RandomPlanet extends Component{

    swapi = new SwapiService();
    state={
        planet:null
    }
    intervalUpdate=()=>setInterval(() => this.updateDataPlanet(), 3000);

    updateDataPlanet=()=>this.swapi.getPlanet(Math.round(Math.random()*19+2))
        .then(planet=>this.setState({planet}))
        .catch(err=>console.log(err))

    componentDidMount=()=>{
        this.intervalUpdate()
    }   
    render=()=>{
        const {planet}=this.state;

        return(
            <div className="random-planet jumbotron jumbotron-fluid">
            
                {planet?
                    <PlanetView planet={planet}/>
                 :<Loader/>} 
                
            </div>)
    }
    
}