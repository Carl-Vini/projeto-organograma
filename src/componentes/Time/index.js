import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {


    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: hexToRgba(props.corPrimaria, '0.5') }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type='color' className='input-cor' /> 
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    console.log('renderizando colaboradores')
                    return <Colaborador nome={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section>
    )
}

export default Time