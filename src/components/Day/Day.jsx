import { Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonNext from '../ButtonNext/ButtonNext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import s from '../Home/Home.module.css';

const Day = () => {
  const[day, setDay] = useState(null);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
return(
  <>
    <ButtonBack to={backLinkHref} />
    <span>Loader</span>
    <h3>В какое время суток Вы чувствуете себя наиболее комфортно?</h3>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => setDay(e.target.value)}
      >
        <FormControlLabel value="Утро" control={<Radio />} label="Утро" />
        <FormControlLabel value="Ночь" control={<Radio />} label="Ночь" />
        <FormControlLabel value="Вечер" control={<Radio />} label="Вечер" />
        <FormControlLabel value="День" control={<Radio />} label="День" />
      </RadioGroup>
    </FormControl>
  {day && <Link className={s.button} to="/night"><ButtonNext/></Link>}
  </>
);
}
export default Day;