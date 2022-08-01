import React from 'react'
import s from './Message.module.css';
export type AlternativeMessageType = {
    avatar2: string
    name2: string
    message2: string
    time2: string

}

function AlternativeMessage(props: AlternativeMessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar2} alt="ava" className={s.avatar}/>

            <div className={s.angle}/>


            <div className={s.content}>

                <div className={s.name}>    {props.name2}  </div>
                <div className={s.message}> {props.message2}  </div>
                <div className={s.time}>    {props.time2}  </div>

            </div>

        </div>
    )
}

export default AlternativeMessage
