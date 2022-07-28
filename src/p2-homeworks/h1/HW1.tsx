import React from 'react'
import Message from './Message';

type MessageDataType = {
    avatar:string
    name:string
    message:string
    time:string

}

const messageData: MessageDataType = {
    avatar: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
