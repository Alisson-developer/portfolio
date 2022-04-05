import './index.css'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import PageMain from '../PageMain'
import React, { useState } from 'react'

export default function PlayButton() {

    const [visible, setVisible] = useState(false)

    return (
        <React.Fragment>
            <div className='playButtonContainer'>
                <h3>Aperte o Play!</h3>

                <div className='playButton' onClick={() => setVisible(!visible)}>
                    <AiOutlinePlayCircle size={100} color='#9e5cdc' />
                </div>
            </div>

            <PageMain visible={visible} />

        </React.Fragment>
    )
}