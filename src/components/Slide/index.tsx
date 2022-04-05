import './index.css'

export default function Slide(props: any) {
    return (
        <section className={props.visible === true ? 'slideContainer' : 'slideContainerHidden'} >
            <input type="radio" name="slider" id="img-1" checked />
            <input type="radio" name="slider" id="img-2" />
            <input type="radio" name="slider" id="img-3" />
            
            <div className='cards'>
                <label className='card' htmlFor="img-1" id='song-1' >
                    <img src="https://www.ovh.pt/images/cdn_2013/pages/booster-site-web.jpg" alt="" />
                </label>

                <label className='card' htmlFor="img-2" id='song-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8HUy8XYpNWB2Qf2HXRduU2Jq983MX4X73vNjDz0sTcoCDmiJVfz15XK-MY9m8ZGzR8w&usqp=CAU" alt="" />
                </label>

                <label className='card' htmlFor="img-3" id='song-3'>
                    <img src="https://web.alquini.com.br/wp-content/uploads/2020/07/criacao-de-sites-baratos-em-londrina.png" alt="" />
                </label>

            </div>

        </section>
    )
}