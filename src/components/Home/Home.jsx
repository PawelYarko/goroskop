import { Link } from 'react-router-dom';
import {useState} from 'react';
import ButtonNext from '../ButtonNext/ButtonNext';
import s from './Home.module.css';

const Home = () => {  
  const[gender, setGender] = useState(null);
  const[checked, setChecked] = useState(false);

  const handleGenderChange = (e) =>{
    e.preventDefault();
    setChecked(!checked);
    if(checked){
      setGender(e.target.value);
      console.log(gender)
    }
  }
    return (
      <>
      <img src="" alt=""/>
      <h2>Узнайте, как 2021 год изменит жизнь каждого из нас! </h2>
      <p>К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. 
          Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 
          2021 год затронет своими потрясениями каждого из нас.</p>
      <form onChange={handleGenderChange}>
          <h3>Укажите свой пол:</h3>
          <label>
            <input type="checkbox" checked={checked}  value="female"/> 
            Женщина                
          </label>
          <label>
            <input type="checkbox" checked={checked} value="male"/> 
            Мужчина                
          </label>
      </form>
         
       <Link className={s.button} to="/day"><ButtonNext/></Link>
      </>
    );
  };

  export default Home;
  