import React, { Component } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Produtos extends Component {

    state = {
        produto: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params
        const response = await api.get(`/todos?id=${id}`);

        this.setState({
            produto: response.data[0]
        })
    }

    render() {
        const { produto } = this.state;

        return (
            <div className="produto-info">
                <h1>Titulo: {produto.title}</h1>
                <p>Complemento: {produto.completed === false ? 'Sim' : 'Não'}</p>
                <p>ID do Produto: {produto.id}</p>
                <p>ID do Usuário: {produto.userId}</p>
                <Link to={`/`} className="link"> Voltar para página</Link>
            </div>
        )

    }
}
