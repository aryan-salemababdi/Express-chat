import React from 'react';
import { Grid,Typography } from "@material-ui/core"



// CSS
import styles from "./login.module.css";
import GetInfo from './GetInfo';



const Login = () => {
  return (
    <div>
      <Grid container className={styles.textLogin}>
        <Grid item>
          <h2>
             Express Chat Room
          </h2>
        </Grid>
      </Grid>
      <GetInfo />
    </div>
  )
}
export default Login;