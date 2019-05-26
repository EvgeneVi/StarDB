import React,{Component} from 'react';
import SwapiService from '../../../services/swapi-service';

import TemplateContent from '../template-content/template-content';
import ListItems from '../list-items/list-items';
import SelectedItem from '../selected-item';




export default class PeoplePage extends Component{
    _swapi= new SwapiService
    state={
        selectedItem:null
    }

    setSelectedItem=(selectedItem)=>this.setState({selectedItem})
    render=()=>
        <TemplateContent 
            left={<ListItems
                setSelected={this.setSelectedItem}
                API={this._swapi.getAllPeople()}
            />} 
            right={<SelectedItem
                selected={this.state.selectedItem}
                renderProperties={(item)=>[item.name, item.height, item.mass, item.birthYear, item.gender]}
            />}

    />
    
}

