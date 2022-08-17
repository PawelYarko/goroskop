import { Link } from 'react-router-dom';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import s from './Home.module.css';

const Home = () => {  
  const [gender, setGender] = useState(null);
  console.log(gender)
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
        <FormControlLabel value="Female" control={<Radio />} label="Женщина" />
        <FormControlLabel value="Male" control={<Radio />}  label="Мужчина" />
      </RadioGroup>
    </FormControl>
    {gender && <Link className={s.button} to="/day" ><Button type="submit" variant="contained">Далее</Button></Link>}
      </>
    );
  };

  export default Home;
  