import React, {Component} from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Add from './Add';

import { getRickandMorty } from '../api/Index'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            pictures:null,
            error:null,
            showAdd: false
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCloseAdd = this.handleCloseAdd.bind(this);
    }
    async componentDidMount(){
        this.setState({isLoading:true});
        try{
            const pictures = await getRickandMorty(); //Llamada a API externa
            this.setState({pictures, isLoading : false});
        } catch(error){
            this.setState({error, isLoading:false});
        }
       return true;
    }
    handleAdd(e){
        e.preventDefault();
        this.setState({showAdd:true});
    }
    handleCloseAdd(reload){
        return () => {
            if(reload){
                this.setState({isLoading:true,showAdd:false});
                getRickandMorty().then(data => this
                .setState({ videos:data,isLoading:false,showAdd: false}))
                .catch(error => this.setState({error, isLoading:false, showAdd:false}))
            } else{
                this.setState({showAdd:false})
            }
        }
    }
    render(){
       const { isLoading, pictures, error } = this.state;

       if(isLoading) {
        return <Loading message="Cargando ..."></Loading>;
       }

       if(error){
           return (<p className="error">{error.message}</p>)
       }

       return ( <React.Fragment>
                <Header onClickAdd={this.handleAdd}></Header>
                <div className="container">
                        <div className="grid-container">
                        {
                            pictures && pictures.map((image,i) => {
                                return(<Item key={i} data={image}></Item>)
                            })
                        }
                        </div>
                </div>
                {this.state.showAdd && (<Add onClose={this.handleCloseAdd}></Add>)}
              </React.Fragment>);
    }
}

export default List;