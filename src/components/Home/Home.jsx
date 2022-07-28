import { NavLink } from 'react-router-dom';
import ButtonNext from '../ButtonNext/ButtonNext';

const Home = () => {
    return (
      <>
      <img src="" alt=""/>
      <h2>Узнайте, как 2021 год изменит жизнь каждого из нас! </h2>
      <p>К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. 
          Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 
          2021 год затронет своими потрясениями каждого из нас.</p>
      <form >
          <h3>Укажите свой пол:</h3>
          <label>
            <input type="radio"/> 
            Женщина                
          </label>
          <label>
            <input type="radio"/> 
            Мужчина                
          </label>
      </form>
      <ButtonNext><NavLink to="/day"/></ButtonNext>
      </>
    );
  };

  export default Home;
  