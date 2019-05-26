import React,{Component} from 'react';
import Loader from '../../loader';


export default class ListItems extends Component{
    state={
        items:null
    }
    async componentDidMount(){
        await this.getAllPeople();
        await this.props.setSelected(this.state.items[0])
    }
    getAllPeople = () => this.props.API.then(res=>Promise.all(res).then(items=>this.setState({items})))//получаем всех сущностей и записываем в state

    renderItems=(item)=>
            <li key={item.id}
                className="list-group-item list-group-item-action"
                onClick={()=>this.props.setSelected(item)}>
            {item.name}</li>;

    render=()=>{
        const {items}=this.state;
       
        if(!items) {return <Loader/>}
       
        const itemsList = items.map(item=>this.renderItems(item))
        return(
            <ul className="list-group">
                {itemsList}
            </ul> 
              
        )           
    }
}