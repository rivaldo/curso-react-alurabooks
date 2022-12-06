import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks';
import React, { useState } from 'react';
import http from '../../http';

import imagemPrincipal from './assets/login.png'


interface PropsModalLoginUsuario{
    aberta: boolean;
    aoFechar: () => void;
    aoEfetuarLogin: () => void;
}

const ModalLoginUsuario = ({aberta, aoFechar, aoEfetuarLogin}: PropsModalLoginUsuario) => {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const efetuarLogin = ( evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        const login = {
            email,
            senha
        }

        http.post('/public/login', login)
        .then((resposta) => {
            sessionStorage.setItem('token', resposta.data.access_token);
            setEmail('');
            setSenha('');
            aoEfetuarLogin(); 

        })
        .catch((erro) => {
            if (erro?.response?.data?.message){
                alert(erro?.response?.data?.message)
            } else {
                alert('Algo deu errado!')
            }            
        })
    }


    return (
        <AbModal
            titulo = 'LOGIN'
            aberta = {aberta}
            aoFechar = { aoFechar}
            
        >
            <section className='corpoModalCadastro'>
                <figure>
                    <img src={imagemPrincipal} alt="Imagem de login" />
                </figure>
                <form onSubmit={efetuarLogin}>
                    <AbCampoTexto
                        value = { email }
                        label = ' E-mail '
                        onChange={ setEmail }
                        placeholder = 'seuemail@maneiro.com.br'
                    />

                    <AbCampoTexto
                        value = {senha}
                        label = ' Senha '
                        onChange= { setSenha }
                        placeholder = '************'
                        type = 'password'
                    />
                    <div className='acoes'>
                        <AbBotao texto='Fazer login'/>
                        <a href="#">Esqueci minha senha</a>
                    </div >
                  
                        
                        
                    
                </form>
            </section>

            <footer>
                    <div className='rodape'>
                        <strong> Ainda não tem conta? </strong>
                        <AbBotao texto='Criar conta'/>
                    </div>
            </footer>
        </AbModal>
    )
        
}

export const usePersistirToken = () => {
    return (token: string) => {
        sessionStorage.setItem('token', token);
    };
};

export const useObterToken = () => {
    return sessionStorage.getItem('token');
};

export const useLimparToken = () => {
    sessionStorage.removeItem('token');
};

export default ModalLoginUsuario;