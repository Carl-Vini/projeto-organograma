import './Rodape.css'

const Rodape = (props) => {
    return (
        <footer className='footer'>
            <div className='redes'>
                <a href='https://www.linkedin.com/in/carlos-vinícius-bezerra-sampaio-b6a302254/' target='_blank'>
                    <img src="/images/fb.png" alt='ícone do facebook' />
                </a>
                <a href='https://www.linkedin.com/in/carlos-vinícius-bezerra-sampaio-b6a302254/' target='_blank'>
                    <img src="/images/tw.png" alt='ícone do twitter' />
                </a>
                <a href='https://www.linkedin.com/in/carlos-vinícius-bezerra-sampaio-b6a302254/' target='_blank'>
                    <img src="/images/ig.png" alt='ícone do instagram' />
                </a>


            </div>
            <img src="/images/logo.png" className='logoOrgano' alt='logo da marca' />
            <div className='autor'>
               <a href='https://github.com/Carl-Vini'><h4>Desenvolvido por Carlos Vinícius</h4></a> 
            </div>
        </footer>
    )
}

export default Rodape