import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import s from '../Home/Home.module.css';

const Birthday = () => {

    const mounths = [1,2,3,4,5,6,7,8,9,10,11,12];

    const [day, setDay] = useState('');
    const [mounth, setMounth] = useState('');
    const [year, setYear] = useState('');

    const handleChangeDay = (e) => {
        setDay(e.target.value);
    };
    const handleChangeMounth = (e) => {
        setMounth(e.target.value);
      };
    const handleChangeYear = (e) => {
        setYear(e.target.value);
    };
  
    return (
      <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Day</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Day"
            onChange={handleChangeDay}
          >
            <MenuItem value={1}>1</MenuItem>
          </Select>
          </FormControl>
         <FormControl sx={{ minWidth: 120 }}> 
          <InputLabel id="demo-simple-select-label">Mounth</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mounth}
            label="Mounth"
            onChange={handleChangeMounth}
          >
            {mounths.map(m => <MenuItem key={m} value={m}>{m}</MenuItem>)}
            
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}> 
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChangeYear}
          >
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Link className={s.button} to="/checkvalue" ><Button type="submit" variant="contained">Далее</Button></Link>
      </>
    );
  }
    export default Birthday;