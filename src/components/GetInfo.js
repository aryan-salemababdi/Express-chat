import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';




//CSS
import styles from "./getinfo.module.css"




const GetInfo = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSex(event.target.value);
    };
    const validation = (user) => {
        if (!user.name) return "لطفا نام خود را وارد کنید !";
        else if (user.sex === "") return "لطفا جنسیت خود را وارد کنید !";
        return null;
    }
    const submit = () => {
        const error = validation({name,sex});
        if(error)return alert(error)
         else{
            alert("اطلاعات دریافت شد !") 
            navigate("/chatroom",{state:{name,sex}})
        };
    }
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <div>
                        <TextField id="standard-basic" label="Name" dir="ltr" variant="standard" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div>
                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-standard-label" >Gender</InputLabel>
                        <Select style={{ width: "100px" }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={sex}
                            onChange={handleChange}
                            label="sex">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="man">مرد</MenuItem>
                            <MenuItem value="woman">زن</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className={styles.getinfo}>
                <Button onClick={submit} variant="contained" >
                    <Typography>ورود به چت روم</Typography>
                </Button>
            </div>
        </div>
    )
}

export default GetInfo;