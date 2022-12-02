import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks'
import { useState } from 'react'
import imagemPrincipal from './assets/login.png'
import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')
    const [endereco, setEndereco] = useState ('')
    const [complemento, setComplemento] = useState ('')
    const [cep, setCep] = useState ('')
    const [senha, setSenha] = useState ('')
    const [confirmaSenha, setConfirmaSenha] = useState ('')
    return ( 
            <AbModal 
                titulo='Cadastrar' 
                aberta = { true }
                aoFechar = { () => console.log('fecha ai')}>

                <div className='corpoModalCadastro'>
                    <figure>
                        <img src={imagemPrincipal} alt='Monitor com uma fechadura e uma pessoa com uma chave logo ao lado' />
                    </figure>
                    <form>
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
                            label = 'E-mail'
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
                        />
                        <AbCampoTexto 
                            value = {confirmaSenha}
                            label = 'Confirmar senha'
                            onChange = {setConfirmaSenha}
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