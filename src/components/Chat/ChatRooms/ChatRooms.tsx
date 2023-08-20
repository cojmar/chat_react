import'./ChatRooms.scss';

const ChatRooms = (props: {}) => {
    return(
        <section className="chat-rooms-container">
            <ul className='chat-room-list'>
                <li className="chat-room-item active">
                    <span className="room-item-icon"></span>
                    <span className="room-item-name">lobby</span>
                </li>
                <li className="chat-room-item">
                    <span className="room-item-icon"></span>
                    <span className="room-item-name">lobby</span>
                </li>
                <li className="chat-room-item">
                    <span className="room-item-icon"></span>
                    <span className="room-item-name">lobby</span>
                </li>
            </ul>
        </section>
    );
}

export default ChatRooms;

