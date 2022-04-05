import './index.css'
import Slide from '../Slide'

export default function PageMain(props: any) {

    return (
        <div className={props.visible === true ? 'pageBodyVisible' : 'pageBodyEmpty'}>
            <Slide visible={props.visible} />
        </div>
    )
}