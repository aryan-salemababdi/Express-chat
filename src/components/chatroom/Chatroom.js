import React from 'react'
import { useLocation } from 'react-router-dom';

// Components
import { Headerchatroom } from './Headerchatroom';


//CSS
import styles from "./chatroom.module.css";
import { Paper } from '@material-ui/core';
import Footerchatroom from './Footerchatroom';





const Chatroom = () => {
  const location = useLocation();
  const name = location.state.name;
  const sex = location.state.sex;
  return (
    <div className={styles.container}>
      <Paper>
        <Headerchatroom />
        <Footerchatroom  name={name} sex={sex} />
      </Paper>
    </div>
  )
}

export default Chatroom;