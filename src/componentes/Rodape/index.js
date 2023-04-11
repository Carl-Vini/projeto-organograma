import './Rodape.css'

const Rodape = (props) => {
    return (
        <footer className='rodape'>
            <div className='redes'> 
                <img src="/images/fb.png" alt='ícone do facebook' />
                <img src="/images/tw.png" alt='ícone do twitter' />
                <img src="/images/ig.png" alt='ícone do instagram' />
                
            </div>
            <img src="/images/logo.png" className='logoOrgano' alt='logo da marca' />
            <div className='autor'>
                <h4>Desenvolvido por Carlos Vinícius</h4>
            </div>
        </footer>
    )
}

export default Rodape