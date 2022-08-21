import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';

const GetResult = () =>{
    return(
        <>
        <h1>Get result</h1>
        <Link className={s.button} to="/birthday">
          <Button type="submit" variant="contained">
            Далее
          </Button>
        </Link>
        </>
    )
}

export default GetResult;