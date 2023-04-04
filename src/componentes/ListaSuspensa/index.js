import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* para cada item, retorna uma option */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa