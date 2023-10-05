import React, { useState, useEffect } from 'react';
import { useSocket } from "../providers/Socket"

const Homepage = () => {

    const { socket } = useSocket();

    const [email, setEmail] = useState();
    const [roomId, setRoomId] = useState();

    const handleRoomJoined = ({ roomId }) => {
        console.log("Room Joined", roomId);
    }

    useEffect(() => {
        socket.on('joined-room', handleRoomJoined);
    }, [socket]);

    const handleJoinRoom = () => {
        socket.emit("join-room", { emailid: email, roomId: roomId });
    }

    return (
        <div className='homepage-container'>
            <div className='input-container'>
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='enter your email address' />
                <input value={roomId} onChange={e => setRoomId(e.target.value)} type='text' placeholder='enter room code' />
                <button onClick={handleJoinRoom}>Enter Room</button>
            </div>
        </div>
    );
};

export default Homepage