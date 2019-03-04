import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
    
    state = {
        produtos: [],
        page: 1
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (pageNumber = 1) => {
        const response = await api.get(`/todos?userId=${pageNumber}`);
        this.setState({
            produtos: response.data,
            page: response.data[0].userId
        })
    }

    nextProduto = () => {
        const page = this.state.page;
        const pageNumber = page +1;
        this.loadProducts(pageNumber);
    }

    prevProduto = () => {
        const page = this.state.page;
        const pageNumber = page -1;
        this.loadProducts(pageNumber);
    }

    render() {
        const { produtos, page } = this.state;
        return (
            <div className="produtos-list">
                {produtos.map(produto => (
                    <article key={produto.id}>
                        <strong>{produto.title}</strong>
                        <p>{produto.completed}</p>
                        <Link to={`/produtos/${produto.id}`}> Acessar Detalhe</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevProduto}>Anterior</button>
                    <button disabled={page === 10} onClick={this.nextProduto}>Próximo</button>
                </div>
            </div>
        )
    }
}