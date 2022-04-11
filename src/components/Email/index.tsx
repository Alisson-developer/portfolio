import './index.css'


export default function Email(props: any) {
    return (
        <section className={props.visible === true ? 'containerEmail' : 'containerEmailNotVisible'}>
            <form ref={() => {}} onSubmit={() => {}}>

                <h1>Contato</h1>

                <div className="containerInput">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" />
                </div>

                <div className="containerInput">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>

                <div className="containerInput">
                    <label htmlFor="subject" >Assunto</label>
                    <input type="text" id="subject" />
                </div>

                <div className="containerInput">
                    <label htmlFor="message" >Mensagem</label>
                    <textarea id="message" rows={10} />
                </div>

                <input type="submit" className="submitButton" value="Enviar" />
                
            </form>
        </section>
    )
}
