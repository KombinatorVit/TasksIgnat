import React from 'react';
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

const messageData: MessageDataType = {
    avatar: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
};

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
            <AlternativeMessage
                avatar2={messageData.avatar}
                name2={messageData.name}
                message2={messageData.message}
                time2={messageData.time}/>
        </div>
    );
}

export default HW1;
