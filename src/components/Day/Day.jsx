import { Link } from 'react-router-dom';
import ButtonNext from '../ButtonNext/ButtonNext';
import s from '../Home/Home.module.css';

const Day = () => {

return(
    <>
    <span>Loader</span>
    <form >
          <h3>В какое время суток Вы чувствуете себя наиболее комфортно?</h3>
          <label>
            <input type="radio"/> 
            Утро                
          </label>
          <label>
            <input type="radio"/> 
            Ночь                
          </label>
          <label>
            <input type="radio"/> 
            Вечер                
          </label>
          <label>
            <input type="radio"/> 
            День                
          </label>
      </form>
      <Link className={s.button} to="/day"><ButtonNext/></Link>
    </>
);
}
export default Day;