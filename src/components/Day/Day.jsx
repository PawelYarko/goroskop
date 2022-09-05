import { Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from '../../useLocalStorage/useLocalStorage';
import ButtonBack from '../ButtonBack/ButtonBack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';

const Day = () => {
  const[day, setDay] = useState(null);
  const [locStorage, setLocStorage] = useLocalStorage('day', []);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    if (day) {
      setLocStorage({day});
    }
  }, [day]);
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
        <FormControlLabel value="morning" control={<Radio />} label="Утро" />
        <FormControlLabel value="night" control={<Radio />} label="Ночь" />
        <FormControlLabel value="evening" control={<Radio />} label="Вечер" />
        <FormControlLabel value="day" control={<Radio />} label="День" />
      </RadioGroup>
    </FormControl>
  {day && <Link className={s.button} to="/night" ><Button type="submit" variant="contained">Далее</Button></Link>}
  </>
);
}
export default Day;