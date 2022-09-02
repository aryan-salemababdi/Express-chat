import React from 'react'


//CSS
import styles from "./bodychatroom.module.css";

// Icons
import menIcon from "../../image/403022_business man_male_user_avatar_profile_icon (2).png";
import womenIcon from "../../image/2289_SkVNQSBGQU1PIDEwMjgtMTE2.jpg";

const Bodychatroom = ({data , name , sex}) => {
    const datamessage = data;
    return (
        <div>
            <div className={styles.bodychatroom}>
                {
                    datamessage.map( (message,id) => {
                        if(!message.msg){
                            return <div></div>
                        }
                        return <div key={id} style={message.sender.name !== name  ? {direction:"ltr"} : {direction:"rtl"}} className={styles.youmessage}>
                            <img title={message.sender.name} src={message.sender.sex === "man" ? menIcon : womenIcon} alt={`${message.sender.sex}`} />
                           <div>
                           <h4 style={{textAlign:"ritgh" , marginRight:"5px"}}>{message.sender.name}</h4>
                            <div style={message.sender.name !== name ? {borderRadius: "0px 15px 15px 15px"} : {borderRadius: "15px 0px 15px 15px"}} className={styles.message}>
                               <p>{message.msg}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Bodychatroom;