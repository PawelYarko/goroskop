import { Link } from 'react-router-dom';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonNext from '../ButtonNext/ButtonNext';
import s from './Home.module.css';

const Home = () => {  
  const [gender, setGender] = useState(null);
    return (
      <>
      <img src="" alt=""/>
      <h2>Узнайте, как 2021 год изменит жизнь каждого из нас! </h2>
      <p>К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. 
          Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 
          2021 год затронет своими потрясениями каждого из нас.</p>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" />
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel control={<Radio />}value="Женщина" label="Female" />
        <FormControlLabel control={<Radio />} value="Мужчина" label="Male" />
      </RadioGroup>
    </FormControl>
    {gender && <Link className={s.button} to="/day"><ButtonNext/></Link>}
      </>
    );
  };

  export default Home;
  