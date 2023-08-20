import './ChatMessages.scss';
import { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export interface ChatUser {
    username: string;
    timeStamp: string;
    message: string;
    isLoggedInUser?: boolean;
    isActive?: boolean;
}

export const MockUserList: ChatUser[] = [
    { username: 'dulceata', timeStamp: '11:20 AM', message: 'The measure of a man is what he does with power.', isActive: true },
    { username: 'cojmar', timeStamp: '06:13 AM', isLoggedInUser: true, message: 'Sunt un zeu al php-ului 👑', isActive: true },
    { username: 'Razvanaru', timeStamp: '03:09 AM', message: 'Nigga nigga nigga niggaaaa!' },
    { username: 'Andrei', timeStamp: '08:00 AM', message: 'Stati asa ca va explic eu.' },
];

const ChatMessages = (props: {}) => {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState<ChatUser[]>([]);

    useEffect(() => setMessageList(MockUserList), []);


    const updateOnEnter = (key: string) => {
        if (key === "Enter") updateMessages();
    }

    const getTimestamp = (): string => {
        const today = new Date();
        const meridian = today.getHours() >= 12 ? 'PM' : 'AM';

        return `${today.getHours()}:${today.getMinutes()} ${meridian}`;
    }

    const updateMessages = () => {
        if (message)
            setMessageList([...messageList, { username: 'cojmar', timeStamp: getTimestamp(), isLoggedInUser: true, message }]);

        setMessage('');
    }

    const renderMessageItem = () => messageList.map((user, index) => (
        <div className="grid message-item" key={index}>
            <div className="col-fixed message-timestamp">{user.timeStamp}</div>
            <div className={`col-fixed message-username ${user.isLoggedInUser ? 'is-logged-in-user' : ''}`}>{user.username}</div>
            <div className="col message">{user.message}</div>
        </div>
    ));



    return (
        <section className="chat-messages-container">
            <div className="message-list">
                {renderMessageItem()}
            </div>
            <div className="send-message-container">
                <div className="send-message-bg-effect">
                    <div className="message-input-container">
                        <span className="message-avatar"></span>
                        <InputText
                            value={message}
                            onKeyPress={(e) => updateOnEnter(e.key)}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Start swearing"
                        />
                        <Button
                            icon="pi pi-check"
                            text
                            onClick={updateMessages}
                            className="send-message-button"
                            size="small"
                            aria-label="Bookmark" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChatMessages;

