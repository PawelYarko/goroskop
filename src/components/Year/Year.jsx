import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';


const Year = () => {  
  const[year, setYear] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

    return(
      <>
      <h3>Какой Вы видите свою жизнь через 5 лет?</h3>
      <ButtonBack to={backLinkHref} />
      <span>Loader</span>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={e => setYear(e.target.value)}
        >
          <FormControlLabel value="family" control={<Radio />} label="Брак, семья, дети, дом" />
          <FormControlLabel value="travel" control={<Radio />} label="Путешествия по Миру" />
          <FormControlLabel value="career" control={<Radio />} label="Успешная карьера" />
          <FormControlLabel value="all" control={<Radio />} label="Всё вместе" />
        </RadioGroup>
      </FormControl>
      {year && (
        <Link className={s.button} to="/birthday">
          <Button type="submit" variant="contained">
            Далее
          </Button>
        </Link>
      )}
        </>
    );
    }
    export default Year;