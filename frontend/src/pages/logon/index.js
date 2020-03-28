import React, { useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


import './styles.css';
import '../../global.css';

import heroesImg from  '../../assets/heroes.png';
import logoImg from '../../assets//logo.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
    
   async function handleLogin(e) {
       e.preventDefault();

        try {
            const response = await api.post('sessions', {id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert(`Falha no login, tente novamente.`)
        }
    }
    return(
        <div className="logon-content">
        <section className="form">
            <img src={logoImg} alt="Be the hero"/>
            
            <form onSubmit={handleLogin}>
                <input 
                placeholder="Digite seu ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="heroes"/>
    </div>
    )
}