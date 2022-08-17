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


const Plan = () => {  
  const[plan, setPlan] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

    return(
      <>
      <h3>Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?</h3>
      <ButtonBack to={backLinkHref} />
      <span>Loader</span>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={e => setPlan(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Да" />
          <FormControlLabel value="no" control={<Radio />} label="Нет" />
          <FormControlLabel
            value="sometimes"
            control={<Radio />}
            label="Иногда"
          />
        </RadioGroup>
      </FormControl>
      {plan && (
        <Link className={s.button} to="/year">
          <Button type="submit" variant="contained">
            Далее
          </Button>
        </Link>
      )}
        </>
    );
    }
    export default Plan;