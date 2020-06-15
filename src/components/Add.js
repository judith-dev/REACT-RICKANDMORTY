import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addPicture } from '../api/Index';

const parseUrl = (url) => {
    const match =  url.match(/[?&]([^=#]+)=([^&#]*)/);
    return match && match[2];
}

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError:false,
            showSending : false,
            title:'',
            url:'',
            descripcion:'',
            fechaPublicacion:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field){
        return (event) => {
            this.setState({
                [field]: event.target.value
            })
        }
    }
    validation(app){
        if(app.title.length > 0 && app.url.length > 0 && app.descripcion.length > 2){
            return true;
        } else {
            return false;
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { onClose } = this.props;
        const token = parseUrl(this.state.url || '');
        if(this.validation(this.state) && token){
            this.setState({showSending: true})
            addPicture({
                name: this.state.name,
                descripcion: this.state.descripcion,
                imagen : this.state.url,
                fechaPublicacion: this.state.fechaPublicacion
            }).then(onClose(true))
        } else{
            this.setState({
                hasError:true
            })
        }
    }

    render(){
        const {showSending, name, url, descripcion, fechaPublicacion, hasError} =  this.state;
        const { onClose } =  this.props;
        return (<div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose(false)}>&times;</span>
                        <h2>Crear Nuevo Personaje</h2>
                        {showSending && (<span className="success"> Enviando ....</span>)}
                        {hasError && (<div className="error" > Some fields fields are empty or contain an wrong values.</div>)}
                        <form>
                            <label>Nombre</label>
                            <input type="text" vaue={name} onChange={this.handleChange("name")} minLength="3" maxLength="200" required ></input>
                            <label>Url</label>
                            <input type="text" value={url} onChange={this.handleChange("url")} minLength="3" maxLength="200" required></input>
                            <label>Descripción</label>
                            <textarea value={descripcion} onChange={this.handleChange("descripcion")} required></textarea>
                            <label>Fecha de Publicación</label>
                            <input type="date" value={fechaPublicacion} onChange={this.handleChange("fechaPublicacion")} required></input>
                            <input type="submit" onClick={this.handlSubmit} value="Submit" disabled={showSending}></input>
                        </form>
                    </div>
               </div>);
    }
}

Add.protoType = {
    onClose: PropTypes.func.isRequired
};

export default Add;