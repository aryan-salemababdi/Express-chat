import { Button, InputBase } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import Bodychatroom from './Bodychatroom';
import SocketIOClient from "socket.io-client";



//CSS
import styles from "./footerchatroom.module.css";

const Footerchatroom = ({ name, sex }) => {
    const [text, setText] = useState("");
    const [messages, setMassages] = useState([]);
    const socket = useRef(SocketIOClient.connect("http://localhost:3010/socket" , {
        transports:["websocket","polling"],
    }))
    useEffect(() => {
        socket.current.on("havemessage", message => {
            console.log(message);
            setMassages(messages => messages.concat(message));
        })
    }, [])
    const sendMessage = () => {
        socket.current.emit("newMessage", {
            id: "",
            sender: {
                name,
                sex,
            },
            msg: text
        });
        setText("")
    }
    return (
        <div>
            <Bodychatroom name={name} data={messages} />
            <div className={styles.footerchatroom}>
            <Button className={styles.button} onClick={sendMessage} style={{ color: "#fff" }}>ارسال</Button>
                <InputBase placeholder="پیام خود را وارد کنید ..." value={text} onChange={(e) => { setText(e.target.value) }} className={styles.inputchat} />
            </div>
        </div>
    )
}

export default Footerchatroom;