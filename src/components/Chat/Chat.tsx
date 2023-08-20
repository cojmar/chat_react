import SideMenu from "../SideMenu/SideMenu";
import'./Chat.scss';
import ChatRooms from './ChatRooms/ChatRooms';
import ChatMessages from './ChatMessages/ChatMessages';
import ChatUsers from './ChatUsers/ChatUsers';

const Chat = (props: {}) => {
    return(
        <section>
            <SideMenu />
            <div className="grid chat-container">
                <div className="col-fixed chat-rooms-holder">
                    <ChatRooms />
                </div>
                <div className="col chat-messages-holder">
                    <ChatMessages />
                </div>
                <div className="col-fixed chat-users-holder">
                    <ChatUsers />
                </div>
            </div>
        </section>
    );
}

export default Chat;

