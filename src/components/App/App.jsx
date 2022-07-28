import { Routes , Route, Navigate} from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Home from '../Home/Home';
import Day from '../Day/Day';
import Night from '../Night/Night';
import Plan from '../Plan/Plan';
import Year from '../Year/Year';
import Birthday from '../Birthday/Birthday';

export const App = () => {
  return (
    <>
    <AppBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/day" element={<Day/>}/>
      <Route path="/night" element={<Night/>}/>
      <Route path="/plan" element={<Plan/>}/>
      <Route path="/year" element={<Year/>}/>
      <Route path="/birthday" element={<Birthday/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </>
  );
};
