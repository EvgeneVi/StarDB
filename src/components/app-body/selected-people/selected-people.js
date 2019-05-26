import React,{Component} from 'react';
import SwapiService from '../../../services/swapi-service';
import './selected-people.css';
import Loader from '../../loader';

export default class SelectedPeople extends Component{
    swapi = new SwapiService();
    state={
        person:null
    }
    componentDidMount=()=>this.updateStatePersone();
    componentDidUpdate=(prevProps)=>{
        if(prevProps.selectedPeople !== this.props.selectedPeople){ 
            this.setState({person:null})
            this.updateStatePersone()
        };
    }
    updateStatePersone=()=>{
        const id = this.props.selectedPeople;
        id&& this.swapi.getPeople(id).then(person=>this.setState({person}));
    }
    renderPerson=({image,name,height,mass,birthYear,gender})=>
        <div className="row">
            <div className='col-sm col-md-auto'>
                <img src={image} alt="planet"></img>
            </div>
            <div className="col">
                <ul>
                    <li>{name}</li>
                    <li>{height}</li>
                    <li>{mass}</li>
                    <li>{birthYear}</li>
                    <li>{gender}</li>
                </ul>
            </div>
        </div>

    render=()=>{
        const {person}=this.state;
        if(!person){
            return <div className="wrapper-loader"><Loader/></div>
        }
        const personView = this.renderPerson(person)
       
        return(
            <div className='info-person jumbotron jumbotron-fluid'> 
                {personView}
            </div>
        )
    }
}