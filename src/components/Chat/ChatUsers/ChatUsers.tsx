import './ChatUsers.scss';
import { useEffect, useState } from 'react';
import { ChatUser, MockUserList } from '../ChatMessages/ChatMessages';

const ChatUsers = (props: {}) => {
    const [userList, setUserList] = useState<ChatUser[]>([]);

    useEffect(() => setUserList(MockUserList), []);


    const renderUserItem = () => userList.map((user, index) => (
        <div className="chat-user-item" key={index}>
            <span className={`chat-user-status ${user.isActive ? 'active' : ''}`}></span>
            <span className={`chat-user-name ${user.isLoggedInUser ? 'is-logged-in-user' : ''}`}>{user.username}</span>
        </div>
    ));

    return (
        <section className="chat-users-container">
            <div className="grid">
                <div className="col-12">
                    <p className="chat-users-count">Funky chat: 001001 users</p>
                </div>
                <div className="col-12">
                    {renderUserItem()}
                </div>
            </div>
        </section>
    );
}

export default ChatUsers;

