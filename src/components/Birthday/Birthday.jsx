import { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLocalStorage from '../../useLocalStorage/useLocalStorage';
import ButtonBack from '../ButtonBack/ButtonBack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import s from '../Home/Home.module.css';

const Birthday = () => {
  const [value, setValue] = useState(null);
  const [locStorage, setLocStorage] = useLocalStorage('birthday', []);

  useEffect(() => {
    if (value) {
      setLocStorage({value});
    }
  }, [value]);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  return (
      <>
      <ButtonBack to={backLinkHref} />
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose birthday date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    {value && <Link className={s.button} to="/checkvalue" ><Button type="submit" variant="contained">Далее</Button></Link>}
      </>
    );
  }
    export default Birthday;