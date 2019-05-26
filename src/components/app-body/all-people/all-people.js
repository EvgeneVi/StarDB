import React,{Component} from 'react';
import SwapiService from '../../../services/swapi-service';

import Loader from '../../loader'

export default class AllPeople extends Component{
    swapi = new SwapiService();
    state={
        people:null
    };
    async componentDidMount(){
        await this.getAllPeople();
        await this.props.setSelectedPeople(this.state.people[0].id)
    }
    getAllPeople = () => this.swapi.getAllPeople().then(res=>Promise.all(res).then(people=>this.setState({people})))//получаем всех персонажей и записываем в state

            
      
                



    renderItems=({id,name})=>
            <li key={id}
                className="list-group-item list-group-item-action"
                onClick={()=>this.props.setSelectedPeople(id)}>
            {name}</li>;

    render=()=>{
        const {people}=this.state;
       
        if(!people) {return <Loader/>}
       
        const peopleList = people.map(person=>this.renderItems(person))
        return(
            <ul className="list-group">
                {peopleList}
            </ul> 
              
        )           
    }

}