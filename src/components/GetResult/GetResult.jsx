import { Link } from 'react-router-dom';
import ButtonBack from '../ButtonBack/ButtonBack';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';

const GetResult = () =>{
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
    return(
        <>
        <ButtonBack to={backLinkHref} />
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