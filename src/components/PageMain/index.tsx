import './index.css'
import Slide from '../Slide'
import Email from '../Email'

export default function PageMain(props: any) {

    return (
        <div className={props.visible === true ? 'pageBodyVisible' : 'pageBodyEmpty'}>
            <Slide visible={props.visible} />
            <Email visible={props.visible} />
        </div>
    )
}