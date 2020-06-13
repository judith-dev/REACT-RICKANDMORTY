import React, {Component} from 'react';
import Loading from './Loading';
import Item from './Item';

import { getRickandMorty } from '../api/Index'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            pictures:null,
            error:null
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true});
        try{
            const pictures = await getRickandMorty(); //Llamada a API externa
            console.log(pictures)
            this.setState({pictures, isLoading : false});
        } catch(error){
            this.setState({error, isLoading:false});
        }
 
    }
    render(){
       const { isLoading, pictures, error } = this.state;

       if(error){
           return (<div> ERROR </div>)
       }

       if(isLoading) {
           return <Loading message="Cargando ..."></Loading>;
       }

       return (<React.Fragment>
               <div className="container">
                    <div className="grid-container">
                    {
                        pictures && pictures.map((image,i) => {
                            return(<Item key={i} data={image}></Item>)
                        })
                    }
                    </div>
               </div>
              </React.Fragment>);
    }
}

export default List;