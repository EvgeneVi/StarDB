import React,{Component} from 'react';
import './selected-item.css';

import Loader from '../../loader';

export default class SelectedItem extends Component{
    state={
        item:null
    }
    componentDidMount = () => this.updateStateItem();
    componentDidUpdate=(prevProps)=>{
        if(prevProps.selected !== this.props.selected){ 
            this.setState({item:null})
            this.updateStateItem()
        };
    }
    updateStateItem=()=>{
        const {selected:item} = this.props;
        item&& this.setState({item});
    }
    renderItem=(item)=>{

        const statsInfo = this.props.renderProperties(item)
        .map((propery,i)=><li key={i}>{propery}</li>)

        return  <div className="row">
                    <div className='col-sm col-md-auto'>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                    <div className="col">
                        <ul>
                            {statsInfo}
                        </ul>
                    </div>
                </div>
        }

    render=()=>{
        const {item}=this.state;
        if(!item){
            return <div className="wrapper-loader"><Loader/></div>
        }
        const itemView = this.renderItem(item)
       
        return(
            <div className='item-details jumbotron jumbotron-fluid'> 
                {itemView}
            </div>
        )
    }
}