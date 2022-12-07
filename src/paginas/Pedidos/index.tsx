import { AbBotao } from 'ds-alurabooks'
import { useEffect, useState } from 'react'
import http from '../../http'
import { IPedido } from '../../interfaces/IPedidos'
import './pedidos.css'

const Pedidos = () => {

    const [pedidos, setPedidos] = useState<IPedido[]>([])

    useEffect( () => {
        

        http.get<IPedido[]>('/pedidos')
        .then(resposta => setPedidos(resposta.data ))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <section className='pedidos'>
            <h1>Meus pedidos</h1>
            { pedidos.map ( pedido => ( <div className='pedido' key={pedido.id}>
                <ul>
                    <li>
                        Pedido: <strong>{pedido.id}</strong>
                    </li>
                    <li>
                        Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
                    </li>
                    <li>
                        Valor total: <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(pedido.total)}</strong>
                    </li>
                    <li>
                        Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong>
                    </li>
                    <AbBotao texto='Detalhes'/>
                </ul>
            </div>))}
        </section>
    )
}

export default Pedidos