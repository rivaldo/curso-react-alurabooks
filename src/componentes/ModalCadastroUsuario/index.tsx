import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import React, { useState } from 'react'
import http from '../../http'
import imagemPrincipal from './assets/login.png'
import './ModalCadastroUsuario.css'

interface PropsModalCadastroUsuario {
    aberta: boolean;
    aoFechar: () => void;
}

const ModalCadastroUsuario = ({aberta, aoFechar}: PropsModalCadastroUsuario) => {
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')
    const [endereco, setEndereco] = useState ('')
    const [complemento, setComplemento] = useState ('')
    const [cep, setCep] = useState ('')
    const [senha, setSenha] = useState ('')
    const [confirmaSenha, setConfirmaSenha] = useState ('')

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            nome,
            email,
            senha, 
            endereco,
            cep,
            complemento
        }

        http.post('/public/registrar', usuario)
        .then(() => {
            alert('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setEndereco('');
            setComplemento('');
            setCep('');
            setSenha('');
            setConfirmaSenha('');
            aoFechar();
        })
        .catch(() => {
            console.log(usuario)
            alert('Ops! Alguma coisa deu errado!')
        })

       
    }


    return ( 
            <AbModal 
                titulo='Cadastrar' 
                aberta = {aberta}
                aoFechar = {aoFechar}>

                <div className='corpoModalCadastro'>
                    <figure>
                        <img src={imagemPrincipal} alt='Monitor com uma fechadura e uma pessoa com uma chave logo ao lado' />
                    </figure>
                    <form onSubmit={aoSubmeterFormulario}>
                        <AbCampoTexto 
                            value = {nome}
                            label = 'Nome'
                            onChange = {setNome}
                        />
                        <AbCampoTexto 
                            value = {email}
                            label = 'E-mail'
                            onChange = {setEmail}
                        />
                        <AbCampoTexto 
                            value = {endereco}
                            label = 'Endereço'
                            onChange = {setEndereco}
                        />
                        <AbCampoTexto 
                            value = {complemento}
                            label = 'Complemento'
                            onChange = {setComplemento}
                        />
                        <AbCampoTexto 
                            value = {cep}
                            label = 'CEP'
                            onChange = {setCep}
                        />
                        <AbCampoTexto 
                            value = {senha}
                            label = 'Senha'
                            onChange = {setSenha}
                            type = 'password'
                        />
                        <AbCampoTexto 
                            value = {confirmaSenha}
                            label = 'Confirmar senha'
                            onChange = {setConfirmaSenha}
                            type = 'password'
                        />

                        <footer className='acoes'>
                            <AbBotao texto='Cadastrar'/>
                        </footer>
                    </form>
                </div>

            </AbModal>
    )
}

export default ModalCadastroUsuario