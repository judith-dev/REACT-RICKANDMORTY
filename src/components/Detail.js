import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getPictureDetail }  from '../api/Index';
import Loading from './Loading';
import Picture from './Picture';


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : true
        };
    }
    componentDidMount(){
  
        const {match} =  this.props;
        this.setState({ isLoading: true });
        getPictureDetail({id: match.params.id})
        .then(data=> this.setState({ picture: data, isLoading: false}))
        .catch(err => this.setState({ error:err, isLoading:false}));
    }
    render (){

        const { isLoading, error, picture} = this.state;
        const { match } =  this.props;

        if(error) return <p className="error">{error.menssage}</p>
        if(isLoading) return <Loading message={`Cargando Imagen (#${match.params.id}) .....`} speed={15}></Loading>;
        


        return (<React.Fragment>
                <div className="detail-container">
                    <Picture name={picture.name} image={picture.image}></Picture>
                    <div className="detail-summary">
                       <h2 className="detail-title">{picture.name}</h2>
                       <p>{picture.species} - {picture.gender}</p>
                    </div>
                </div>
            </React.Fragment>)
    }
}

export default withRouter(Detail);