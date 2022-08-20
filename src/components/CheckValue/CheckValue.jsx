import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';

const CheckValue = () =>{
    return(
        <>
        <h1>CheckValue</h1>
        <Link className={s.button} to="/night" ><Button type="submit" variant="contained">Далее</Button></Link>
        </>
    )
}

export default CheckValue;