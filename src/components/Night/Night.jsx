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

const Night = () => {
  const [night, setNight] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <ButtonBack to={backLinkHref} />
      <span>Loader</span>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={e => setNight(e.target.value)}
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
      {night && (
        <Link className={s.button} to="/plan">
          <Button type="submit" variant="contained">
            Далее
          </Button>
        </Link>
      )}
    </>
  );
};
export default Night;
